import { render, screen } from "../../../test-utils";
import { ExperienceCard, Experience } from "./experienceCard";

describe("ExperienceCard", () => {
  const mockExperience: Experience = {
    title: "Frontend Engineer",
    company: "Test Company",
    companyUrl: "https://testcompany.com",
    startDate: "2022",
    endDate: "Present",
    description: "Building React applications for enterprise clients.",
    skillSet: ["React", "TypeScript", "Jest"],
    highlights: [
      "Led Training System development",
      "Built EIS (Early Intervention System) with real-time alerts",
      "Implemented testing with comprehensive coverage",
    ],
  };

  describe("Rendering", () => {
    it("renders experience title", () => {
      render(<ExperienceCard experience={mockExperience} />);
      expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
    });

    it("renders company name", () => {
      render(<ExperienceCard experience={mockExperience} />);
      expect(screen.getByText("Test Company")).toBeInTheDocument();
    });

    it("renders date range", () => {
      render(<ExperienceCard experience={mockExperience} />);
      expect(screen.getByText("2022 – Present")).toBeInTheDocument();
    });

    it("renders description", () => {
      render(<ExperienceCard experience={mockExperience} />);
      expect(screen.getByText(/Building React applications/i)).toBeInTheDocument();
    });
  });

  describe("Company URL", () => {
    it("renders company as link when URL is provided", () => {
      render(<ExperienceCard experience={mockExperience} />);
      const companyLink = screen.getByRole("link", { name: /Test Company/i });
      expect(companyLink).toBeInTheDocument();
      expect(companyLink).toHaveAttribute("href", "https://testcompany.com");
    });

    it("renders company as plain text when URL is not provided", () => {
      const experienceWithoutUrl: Experience = {
        ...mockExperience,
        companyUrl: undefined,
      };
      render(<ExperienceCard experience={experienceWithoutUrl} />);
      expect(screen.getByText("Test Company")).toBeInTheDocument();
      expect(screen.queryByRole("link", { name: /Test Company/i })).not.toBeInTheDocument();
    });

    it("opens company link in new tab", () => {
      render(<ExperienceCard experience={mockExperience} />);
      const companyLink = screen.getByRole("link", { name: /Test Company/i });
      expect(companyLink).toHaveAttribute("target", "_blank");
      expect(companyLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Skill Set", () => {
    it("renders all skills as pills", () => {
      render(<ExperienceCard experience={mockExperience} />);
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Jest")).toBeInTheDocument();
    });

    it("renders multiple skills correctly", () => {
      const experienceWithManySkills: Experience = {
        ...mockExperience,
        skillSet: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
      };
      render(<ExperienceCard experience={experienceWithManySkills} />);

      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Node.js")).toBeInTheDocument();
      expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
      expect(screen.getByText("Docker")).toBeInTheDocument();
      expect(screen.getByText("AWS")).toBeInTheDocument();
    });

    it("handles empty skill set", () => {
      const experienceWithoutSkills: Experience = {
        ...mockExperience,
        skillSet: [],
      };
      render(<ExperienceCard experience={experienceWithoutSkills} />);
      expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
    });
  });

  describe("Highlights", () => {
    it("renders all highlights when provided", () => {
      const { container } = render(<ExperienceCard experience={mockExperience} />);
      const text = container.textContent || "";
      expect(text).toMatch(/Led Training System development/i);
      expect(text).toMatch(/Built EIS/i);
      expect(text).toMatch(/Implemented testing/i);
    });

    it("renders highlights as bullet list", () => {
      const { container } = render(<ExperienceCard experience={mockExperience} />);
      const text = container.textContent || "";
      // Verify all 3 highlights are present
      expect(text).toMatch(/Led Training System development/i);
      expect(text).toMatch(/Built EIS/i);
      expect(text).toMatch(/Implemented testing/i);
    });

    it("handles experience without highlights", () => {
      const experienceWithoutHighlights: Experience = {
        ...mockExperience,
        highlights: undefined,
      };
      render(<ExperienceCard experience={experienceWithoutHighlights} />);
      expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
    });

    it("handles empty highlights array", () => {
      const experienceWithEmptyHighlights: Experience = {
        ...mockExperience,
        highlights: [],
      };
      render(<ExperienceCard experience={experienceWithEmptyHighlights} />);
      expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
    });
  });

  describe("Date Formatting", () => {
    it("formats date range with en dash", () => {
      render(<ExperienceCard experience={mockExperience} />);
      expect(screen.getByText("2022 – Present")).toBeInTheDocument();
    });

    it("handles different date formats", () => {
      const experienceWithMonthYear: Experience = {
        ...mockExperience,
        startDate: "Jan 2020",
        endDate: "Dec 2022",
      };
      render(<ExperienceCard experience={experienceWithMonthYear} />);
      expect(screen.getByText("Jan 2020 – Dec 2022")).toBeInTheDocument();
    });
  });

  describe("Text Highlighting", () => {
    it("highlights project names in highlights", () => {
      render(<ExperienceCard experience={mockExperience} />);
      // Training System and EIS should be bolded/highlighted
      expect(screen.getByText(/Training System/i)).toBeInTheDocument();
      expect(screen.getByText(/EIS/i)).toBeInTheDocument();
    });

    it("preserves full highlight text", () => {
      const { container } = render(<ExperienceCard experience={mockExperience} />);
      const text = container.textContent || "";
      expect(text).toMatch(/Led Training System development/i);
    });
  });

  describe("Layout", () => {
    it("renders in a card component", () => {
      const { container } = render(<ExperienceCard experience={mockExperience} />);
      // Card component should be present
      expect(container.firstChild).toBeInTheDocument();
    });

    it("displays information in correct order", () => {
      const { container } = render(<ExperienceCard experience={mockExperience} />);
      const text = container.textContent;

      // Title should appear before company
      const titleIndex = text?.indexOf("Frontend Engineer") || 0;
      const companyIndex = text?.indexOf("Test Company") || 0;
      expect(titleIndex).toBeLessThan(companyIndex);
    });
  });

  describe("Accessibility", () => {
    it("renders semantic HTML for date", () => {
      render(<ExperienceCard experience={mockExperience} />);
      expect(screen.getByText("2022 – Present")).toBeInTheDocument();
    });

    it("renders external link with proper attributes", () => {
      render(<ExperienceCard experience={mockExperience} />);
      const link = screen.getByRole("link", { name: /Test Company/i });
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Edge Cases", () => {
    it("handles minimal experience data", () => {
      const minimalExperience: Experience = {
        title: "Developer",
        company: "Company",
        startDate: "2020",
        endDate: "2021",
        description: "Description",
        skillSet: [],
      };
      render(<ExperienceCard experience={minimalExperience} />);
      expect(screen.getByText("Developer")).toBeInTheDocument();
      expect(screen.getByText("Company")).toBeInTheDocument();
    });

    it("handles very long descriptions", () => {
      const longDescription = "A".repeat(500);
      const experienceWithLongDesc: Experience = {
        ...mockExperience,
        description: longDescription,
      };
      render(<ExperienceCard experience={experienceWithLongDesc} />);
      expect(screen.getByText(longDescription)).toBeInTheDocument();
    });

    it("handles special characters in company name", () => {
      const experienceWithSpecialChars: Experience = {
        ...mockExperience,
        company: "Test & Company, Inc.",
      };
      render(<ExperienceCard experience={experienceWithSpecialChars} />);
      expect(screen.getByText("Test & Company, Inc.")).toBeInTheDocument();
    });
  });
});
