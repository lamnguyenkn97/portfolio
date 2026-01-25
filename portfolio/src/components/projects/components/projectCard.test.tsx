import { render, screen, waitFor } from "../../../test-utils";
import { ProjectCard, Project } from "./projectCard";

// Mock fetch API
global.fetch = jest.fn();

const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

describe("ProjectCard", () => {
  const mockProject: Project = {
    title: "Test Project",
    description: "A test project description",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    techStack: ["React", "TypeScript", "Jest"],
    repoUrl: "https://github.com/test/repo",
    liveUrl: "https://example.com",
  };

  beforeEach(() => {
    mockFetch.mockClear();
    // Default mock for fetch to prevent errors when npmUrl is provided
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ downloads: [] }),
    } as Response);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders project title", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText("Test Project")).toBeInTheDocument();
    });

    it("renders project description when provided", () => {
      const projectWithDescription: Project = {
        ...mockProject,
        features: undefined, // Remove features so description is rendered
      };
      render(<ProjectCard project={projectWithDescription} />);
      expect(screen.getByText("A test project description")).toBeInTheDocument();
    });

    it("renders project features when provided", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText("Feature 1")).toBeInTheDocument();
      expect(screen.getByText("Feature 2")).toBeInTheDocument();
      expect(screen.getByText("Feature 3")).toBeInTheDocument();
    });

    it("renders tech stack pills", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Jest")).toBeInTheDocument();
    });
  });

  describe("Action Buttons", () => {
    it("renders GitHub button when repoUrl is provided", () => {
      render(<ProjectCard project={mockProject} />);
      const githubButton = screen.getByLabelText(/View source code on GitHub/i);
      expect(githubButton).toBeInTheDocument();
    });

    it("renders Live Demo button when liveUrl is provided", () => {
      render(<ProjectCard project={mockProject} />);
      const liveButton = screen.getByLabelText(/View live demo/i);
      expect(liveButton).toBeInTheDocument();
    });

    it("does not render buttons when URLs are not provided", () => {
      const projectWithoutUrls: Project = {
        title: "Minimal Project",
      };
      render(<ProjectCard project={projectWithoutUrls} />);
      expect(screen.queryByLabelText(/View source code on GitHub/i)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/View live demo/i)).not.toBeInTheDocument();
    });

    it("renders NPM button when npmUrl is provided", () => {
      const projectWithNpm: Project = {
        ...mockProject,
        npmUrl: "https://www.npmjs.com/package/test-package",
      };
      render(<ProjectCard project={projectWithNpm} />);
      const npmButton = screen.getByLabelText(/View on NPM registry/i);
      expect(npmButton).toBeInTheDocument();
    });
  });

  describe("NPM Download Stats", () => {
    it("fetches and displays NPM download stats", async () => {
      const mockDownloadsData = {
        downloads: [
          { downloads: 100, day: "2024-01-01" },
          { downloads: 200, day: "2024-01-02" },
          { downloads: 300, day: "2024-01-03" },
        ],
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockDownloadsData,
      } as Response);

      const projectWithNpm: Project = {
        ...mockProject,
        npmUrl: "https://www.npmjs.com/package/test-package",
      };

      render(<ProjectCard project={projectWithNpm} />);

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          "https://api.npmjs.org/downloads/range/last-month/test-package"
        );
      });

      await waitFor(() => {
        // Total downloads: 100 + 200 + 300 = 600
        expect(screen.getByText(/600/)).toBeInTheDocument();
      });
    });

    it("formats download numbers correctly (thousands)", async () => {
      const mockDownloadsData = {
        downloads: Array.from({ length: 30 }, (_, i) => ({
          downloads: 100,
          day: `2024-01-${i + 1}`,
        })),
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockDownloadsData,
      } as Response);

      const projectWithNpm: Project = {
        ...mockProject,
        npmUrl: "https://www.npmjs.com/package/popular-package",
      };

      render(<ProjectCard project={projectWithNpm} />);

      await waitFor(() => {
        // Total: 30 * 100 = 3000 -> "3.0k"
        expect(screen.getByText(/3\.0k/)).toBeInTheDocument();
      });
    });

    it("handles fetch errors gracefully", async () => {
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      const projectWithNpm: Project = {
        ...mockProject,
        npmUrl: "https://www.npmjs.com/package/test-package",
        stats: {
          downloadsPerMonth: "1.2k", // Fallback static value
        },
      };

      render(<ProjectCard project={projectWithNpm} />);

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled();
      });

      // Should display fallback value
      expect(screen.getByText(/1\.2k/)).toBeInTheDocument();
    });

    it("does not fetch stats when npmUrl is not provided", () => {
      render(<ProjectCard project={mockProject} />);
      expect(mockFetch).not.toHaveBeenCalled();
    });
  });

  describe("Tech Stack", () => {
    it("renders multiple tech stack items", () => {
      const projectWithManyTechs: Project = {
        ...mockProject,
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      };
      render(<ProjectCard project={projectWithManyTechs} />);

      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Node.js")).toBeInTheDocument();
      expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
      expect(screen.getByText("Docker")).toBeInTheDocument();
    });

    it("handles empty tech stack", () => {
      const projectWithoutTech: Project = {
        title: "Project Without Tech",
        techStack: [],
      };
      render(<ProjectCard project={projectWithoutTech} />);
      expect(screen.getByText("Project Without Tech")).toBeInTheDocument();
    });
  });

  describe("Features vs Description", () => {
    it("renders features when both features and description are provided", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText("Feature 1")).toBeInTheDocument();
      // Description should NOT be rendered when features are present (features take priority)
      expect(screen.queryByText("A test project description")).not.toBeInTheDocument();
    });

    it("handles project with only description", () => {
      const projectWithOnlyDesc: Project = {
        title: "Desc Only Project",
        description: "Only description, no features",
      };
      render(<ProjectCard project={projectWithOnlyDesc} />);
      expect(screen.getByText("Only description, no features")).toBeInTheDocument();
    });

    it("handles project with only features", () => {
      const projectWithOnlyFeatures: Project = {
        title: "Features Only Project",
        features: ["Feature A", "Feature B"],
      };
      render(<ProjectCard project={projectWithOnlyFeatures} />);
      expect(screen.getByText("Feature A")).toBeInTheDocument();
      expect(screen.getByText("Feature B")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has accessible button labels", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByLabelText(/View source code on GitHub/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/View live demo/i)).toBeInTheDocument();
    });

    it("renders links with proper attributes", () => {
      render(<ProjectCard project={mockProject} />);
      const githubButton = screen.getByLabelText(/View source code on GitHub/i);
      expect(githubButton).toHaveAttribute("href", mockProject.repoUrl);
    });
  });
});
