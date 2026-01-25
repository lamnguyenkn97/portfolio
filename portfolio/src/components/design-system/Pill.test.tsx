import { render, screen } from "../../test-utils";
import { Pill } from "./Pill";

describe("Pill", () => {
  describe("Rendering", () => {
    it("renders children text correctly", () => {
      render(<Pill>React</Pill>);
      expect(screen.getByText("React")).toBeInTheDocument();
    });

    it("renders with default variant and size", () => {
      render(<Pill data-testid="default-pill">TypeScript</Pill>);
      expect(screen.getByTestId("default-pill")).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Pill variant="default">Default</Pill>);
      expect(screen.getByText("Default")).toBeInTheDocument();
    });

    it("renders spotify variant", () => {
      render(<Pill variant="spotify">Spotify</Pill>);
      expect(screen.getByText("Spotify")).toBeInTheDocument();
    });

    it("renders teal variant", () => {
      render(<Pill variant="teal">Teal</Pill>);
      expect(screen.getByText("Teal")).toBeInTheDocument();
    });

    it("renders gold variant", () => {
      render(<Pill variant="gold">Gold</Pill>);
      expect(screen.getByText("Gold")).toBeInTheDocument();
    });

    it("renders skill variant", () => {
      render(<Pill variant="skill">Skill</Pill>);
      expect(screen.getByText("Skill")).toBeInTheDocument();
    });
  });

  describe("Sizes", () => {
    it("renders small size (default)", () => {
      render(<Pill size="small">Small</Pill>);
      expect(screen.getByText("Small")).toBeInTheDocument();
    });

    it("renders medium size", () => {
      render(<Pill size="medium">Medium</Pill>);
      expect(screen.getByText("Medium")).toBeInTheDocument();
    });
  });

  describe("Start Icon", () => {
    it("renders with start icon", () => {
      const Icon = () => <span data-testid="test-icon">★</span>;
      render(
        <Pill startIcon={<Icon />} data-testid="pill-with-icon">
          With Icon
        </Pill>
      );
      expect(screen.getByTestId("pill-with-icon")).toBeInTheDocument();
      expect(screen.getByTestId("test-icon")).toBeInTheDocument();
      expect(screen.getByText("With Icon")).toBeInTheDocument();
    });

    it("renders without icon when not provided", () => {
      render(<Pill>No Icon</Pill>);
      expect(screen.getByText("No Icon")).toBeInTheDocument();
    });
  });

  describe("Styling", () => {
    it("has inline-flex display", () => {
      render(<Pill data-testid="inline-pill">Inline</Pill>);
      const pill = screen.getByTestId("inline-pill");
      expect(pill).toHaveStyle({ display: "inline-flex" });
    });

    it("prevents text wrapping with nowrap", () => {
      render(<Pill data-testid="nowrap-pill">Long text that should not wrap</Pill>);
      const pill = screen.getByTestId("nowrap-pill");
      expect(pill).toHaveStyle({ whiteSpace: "nowrap" });
    });
  });

  describe("Text Transform", () => {
    it("applies uppercase for gold variant", () => {
      render(<Pill variant="gold" data-testid="gold-pill">Gold</Pill>);
      const pill = screen.getByTestId("gold-pill");
      expect(pill).toHaveStyle({ textTransform: "uppercase" });
    });

    it("applies uppercase for teal variant", () => {
      render(<Pill variant="teal" data-testid="teal-pill">Teal</Pill>);
      const pill = screen.getByTestId("teal-pill");
      expect(pill).toHaveStyle({ textTransform: "uppercase" });
    });

    it("applies none text-transform for default variant", () => {
      render(<Pill variant="default" data-testid="default-pill">Default</Pill>);
      const pill = screen.getByTestId("default-pill");
      expect(pill).toHaveStyle({ textTransform: "none" });
    });
  });

  describe("Custom styling", () => {
    it("accepts custom sx prop", () => {
      render(
        <Pill sx={{ backgroundColor: "blue" }} data-testid="custom-pill">
          Custom
        </Pill>
      );
      expect(screen.getByTestId("custom-pill")).toBeInTheDocument();
    });
  });

  describe("Additional props", () => {
    it("supports data-testid", () => {
      render(<Pill data-testid="test-pill">Test</Pill>);
      expect(screen.getByTestId("test-pill")).toBeInTheDocument();
    });

    it("supports onClick handler", () => {
      const handleClick = jest.fn();
      render(
        <Pill onClick={handleClick} data-testid="clickable-pill">
          Clickable
        </Pill>
      );
      const pill = screen.getByTestId("clickable-pill");
      pill.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Variant combinations", () => {
    it("renders skill variant with medium size", () => {
      render(
        <Pill variant="skill" size="medium" data-testid="skill-medium">
          Skill Badge
        </Pill>
      );
      expect(screen.getByTestId("skill-medium")).toBeInTheDocument();
    });

    it("renders spotify variant with icon", () => {
      const SpotifyIcon = () => <span>♫</span>;
      render(
        <Pill variant="spotify" startIcon={<SpotifyIcon />}>
          Spotify Tag
        </Pill>
      );
      expect(screen.getByText("Spotify Tag")).toBeInTheDocument();
      expect(screen.getByText("♫")).toBeInTheDocument();
    });
  });
});
