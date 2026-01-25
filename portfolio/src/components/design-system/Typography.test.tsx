import { render, screen } from "../../test-utils";
import { Typography } from "./Typography";

describe("Typography", () => {
  describe("Rendering", () => {
    it("renders children text correctly", () => {
      render(<Typography>Hello World</Typography>);
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

    it("renders with default variant (body)", () => {
      render(<Typography>Default text</Typography>);
      expect(screen.getByText("Default text")).toBeInTheDocument();
    });
  });

  describe("Custom Variants", () => {
    it("renders hero variant as h1", () => {
      render(<Typography variant="hero">Hero Title</Typography>);
      const element = screen.getByText("Hero Title");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("H1");
    });

    it("renders sectionTitle variant as h6", () => {
      render(<Typography variant="sectionTitle">Section Title</Typography>);
      const element = screen.getByText("Section Title");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("H6");
    });

    it("renders projectTitle variant as h6", () => {
      render(<Typography variant="projectTitle">Project Title</Typography>);
      const element = screen.getByText("Project Title");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("H6");
    });

    it("renders experienceTitle variant as h6", () => {
      render(<Typography variant="experienceTitle">Experience Title</Typography>);
      const element = screen.getByText("Experience Title");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("H6");
    });

    it("renders dateRange variant", () => {
      render(<Typography variant="dateRange">2020 - 2024</Typography>);
      expect(screen.getByText("2020 - 2024")).toBeInTheDocument();
    });

    it("renders companyName variant", () => {
      render(<Typography variant="companyName">Axon</Typography>);
      expect(screen.getByText("Axon")).toBeInTheDocument();
    });

    it("renders body variant", () => {
      render(<Typography variant="body">Body text</Typography>);
      expect(screen.getByText("Body text")).toBeInTheDocument();
    });

    it("renders description variant", () => {
      render(<Typography variant="description">Description text</Typography>);
      expect(screen.getByText("Description text")).toBeInTheDocument();
    });

    it("renders caption variant", () => {
      render(<Typography variant="caption">Caption text</Typography>);
      expect(screen.getByText("Caption text")).toBeInTheDocument();
    });

    it("renders overline variant", () => {
      render(<Typography variant="overline">Overline text</Typography>);
      const element = screen.getByText("Overline text");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("SPAN");
    });
  });

  describe("Spotify prop", () => {
    it("applies spotify styling when spotify prop is true", () => {
      render(
        <Typography variant="projectTitle" spotify>
          Spotify Project
        </Typography>
      );
      expect(screen.getByText("Spotify Project")).toBeInTheDocument();
    });

    it("does not apply spotify styling by default", () => {
      render(<Typography variant="projectTitle">Normal Project</Typography>);
      expect(screen.getByText("Normal Project")).toBeInTheDocument();
    });
  });

  describe("Standard MUI Variants", () => {
    it("renders h1 MUI variant", () => {
      render(<Typography variant="h1">H1 Title</Typography>);
      const element = screen.getByText("H1 Title");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("H1");
    });

    it("renders h2 MUI variant", () => {
      render(<Typography variant="h2">H2 Title</Typography>);
      const element = screen.getByText("H2 Title");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("H2");
    });

    it("renders body1 MUI variant", () => {
      render(<Typography variant="body1">Body 1 text</Typography>);
      expect(screen.getByText("Body 1 text")).toBeInTheDocument();
    });

    it("renders body2 MUI variant", () => {
      render(<Typography variant="body2">Body 2 text</Typography>);
      expect(screen.getByText("Body 2 text")).toBeInTheDocument();
    });
  });

  describe("Semantic HTML", () => {
    it("uses correct semantic HTML tags for variants", () => {
      const { rerender } = render(<Typography variant="hero">Hero</Typography>);
      expect(screen.getByText("Hero").tagName).toBe("H1");

      rerender(<Typography variant="sectionTitle">Section</Typography>);
      expect(screen.getByText("Section").tagName).toBe("H6");

      rerender(<Typography variant="body">Body</Typography>);
      expect(screen.getByText("Body").tagName).toBe("P");
    });
  });

  describe("Custom styling", () => {
    it("accepts custom sx prop", () => {
      render(
        <Typography sx={{ color: "red" }} data-testid="custom-typography">
          Custom
        </Typography>
      );
      expect(screen.getByTestId("custom-typography")).toBeInTheDocument();
    });

    it("merges custom sx with variant styles", () => {
      render(
        <Typography variant="hero" sx={{ marginTop: 2 }} data-testid="merged-styles">
          Merged
        </Typography>
      );
      expect(screen.getByTestId("merged-styles")).toBeInTheDocument();
    });
  });

  describe("Additional props", () => {
    it("supports className prop", () => {
      render(<Typography className="custom-class">Classed</Typography>);
      const element = screen.getByText("Classed");
      expect(element).toHaveClass("custom-class");
    });

    it("supports data attributes", () => {
      render(<Typography data-testid="test-typography">Test</Typography>);
      expect(screen.getByTestId("test-typography")).toBeInTheDocument();
    });
  });
});
