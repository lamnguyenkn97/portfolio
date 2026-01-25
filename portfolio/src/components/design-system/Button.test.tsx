import { render, screen } from "../../test-utils";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  describe("Rendering", () => {
    it("renders children text correctly", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("renders with default variant (primary)", () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveStyle({ textTransform: "none" });
    });
  });

  describe("Variants", () => {
    it("renders primary variant", () => {
      render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole("button", { name: "Primary" })).toBeInTheDocument();
    });

    it("renders secondary variant", () => {
      render(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole("button", { name: "Secondary" })).toBeInTheDocument();
    });

    it("renders spotify variant", () => {
      render(<Button variant="spotify">Spotify</Button>);
      expect(screen.getByRole("button", { name: "Spotify" })).toBeInTheDocument();
    });

    it("renders text variant", () => {
      render(<Button variant="text">Text</Button>);
      expect(screen.getByRole("button", { name: "Text" })).toBeInTheDocument();
    });

    it("renders outlined variant", () => {
      render(<Button variant="outlined">Outlined</Button>);
      expect(screen.getByRole("button", { name: "Outlined" })).toBeInTheDocument();
    });
  });

  describe("Sizes", () => {
    it("renders small size", () => {
      render(<Button size="small">Small</Button>);
      expect(screen.getByRole("button", { name: "Small" })).toBeInTheDocument();
    });

    it("renders medium size (default)", () => {
      render(<Button size="medium">Medium</Button>);
      expect(screen.getByRole("button", { name: "Medium" })).toBeInTheDocument();
    });

    it("renders large size", () => {
      render(<Button size="large">Large</Button>);
      expect(screen.getByRole("button", { name: "Large" })).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    it("calls onClick handler when clicked", async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);

      await user.click(screen.getByRole("button", { name: "Click me" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", () => {
      const handleClick = jest.fn();

      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );

      const button = screen.getByRole("button", { name: "Disabled" });
      // Disabled buttons should not be clickable
      expect(button).toBeDisabled();
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("has accessible button role", () => {
      render(<Button>Accessible</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("supports aria-label", () => {
      render(<Button aria-label="Custom label">Icon</Button>);
      expect(screen.getByRole("button", { name: "Custom label" })).toBeInTheDocument();
    });

    it("can be disabled", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
    });

    it("can be focused", () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole("button");
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe("Link behavior", () => {
    it("renders as link when href is provided", () => {
      render(
        <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
          Link Button
        </Button>
      );
      // When href is provided, MUI Button renders as a link, not button
      const link = screen.getByRole("link", { name: "Link Button" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://example.com");
    });
  });

  describe("Custom styling", () => {
    it("accepts custom sx prop", () => {
      render(<Button sx={{ width: "100%" }}>Full Width</Button>);
      const button = screen.getByRole("button", { name: "Full Width" });
      expect(button).toBeInTheDocument();
    });
  });
});
