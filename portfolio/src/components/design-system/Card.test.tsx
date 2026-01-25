import { render, screen } from "../../test-utils";
import { Card } from "./Card";

describe("Card", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(<Card>Card Content</Card>);
      expect(screen.getByText("Card Content")).toBeInTheDocument();
    });

    it("renders with default variant", () => {
      render(<Card data-testid="default-card">Default Card</Card>);
      expect(screen.getByTestId("default-card")).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(
        <Card variant="default" data-testid="default-card">
          Default
        </Card>
      );
      expect(screen.getByTestId("default-card")).toBeInTheDocument();
    });

    it("renders spotify variant", () => {
      render(
        <Card variant="spotify" data-testid="spotify-card">
          Spotify
        </Card>
      );
      expect(screen.getByTestId("spotify-card")).toBeInTheDocument();
    });

    it("renders gold variant", () => {
      render(
        <Card variant="gold" data-testid="gold-card">
          Gold
        </Card>
      );
      expect(screen.getByTestId("gold-card")).toBeInTheDocument();
    });

    it("renders elevated variant", () => {
      render(
        <Card variant="elevated" data-testid="elevated-card">
          Elevated
        </Card>
      );
      expect(screen.getByTestId("elevated-card")).toBeInTheDocument();
    });
  });

  describe("Layout", () => {
    it("renders full width by default", () => {
      render(<Card data-testid="full-width-card">Full Width</Card>);
      const card = screen.getByTestId("full-width-card");
      expect(card).toHaveStyle({ width: "100%" });
    });

    it("has auto height based on content", () => {
      render(<Card data-testid="auto-height-card">Auto Height</Card>);
      const card = screen.getByTestId("auto-height-card");
      expect(card).toHaveStyle({ height: "auto" });
    });
  });

  describe("Custom styling", () => {
    it("accepts custom sx prop", () => {
      render(
        <Card sx={{ backgroundColor: "red" }} data-testid="custom-card">
          Custom
        </Card>
      );
      expect(screen.getByTestId("custom-card")).toBeInTheDocument();
    });

    it("can override width with sx prop", () => {
      render(
        <Card sx={{ width: "50%" }} data-testid="custom-width-card">
          Custom Width
        </Card>
      );
      expect(screen.getByTestId("custom-width-card")).toBeInTheDocument();
    });
  });

  describe("Complex children", () => {
    it("renders nested components", () => {
      render(
        <Card>
          <h2>Title</h2>
          <p>Description</p>
        </Card>
      );
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("renders multiple child elements", () => {
      render(
        <Card>
          <div>First</div>
          <div>Second</div>
          <div>Third</div>
        </Card>
      );
      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Second")).toBeInTheDocument();
      expect(screen.getByText("Third")).toBeInTheDocument();
    });
  });

  describe("Additional props", () => {
    it("supports data-testid", () => {
      render(<Card data-testid="test-card">Test</Card>);
      expect(screen.getByTestId("test-card")).toBeInTheDocument();
    });

    it("supports onClick handler", () => {
      const handleClick = jest.fn();
      render(
        <Card onClick={handleClick} data-testid="clickable-card">
          Clickable
        </Card>
      );
      const card = screen.getByTestId("clickable-card");
      card.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
