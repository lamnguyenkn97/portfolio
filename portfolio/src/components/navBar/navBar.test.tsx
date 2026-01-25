import { render, screen, fireEvent, waitFor } from "../../test-utils";
import { NavBar } from "./navBar";
import userEvent from "@testing-library/user-event";

// Mock window.scrollTo
const mockScrollTo = jest.fn();
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: mockScrollTo,
});

describe("NavBar", () => {
  beforeEach(() => {
    mockScrollTo.mockClear();
    // Mock document.getElementById to return mock elements
    document.getElementById = jest.fn((id) => {
      const mockElement = document.createElement("div");
      mockElement.id = id;
      mockElement.getBoundingClientRect = () => ({
        top: 100,
        bottom: 500,
        left: 0,
        right: 0,
        width: 0,
        height: 400,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      });
      Object.defineProperty(mockElement, "offsetTop", { value: 100 });
      Object.defineProperty(mockElement, "offsetHeight", { value: 400 });
      return mockElement;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders all navigation items", () => {
      render(<NavBar />);

      expect(screen.getByRole("button", { name: /Navigate to ABOUT section/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Navigate to EXPERIENCE section/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Navigate to PROJECTS section/i })).toBeInTheDocument();
    });

    it("renders navigation labels correctly", () => {
      render(<NavBar />);

      expect(screen.getByText("ABOUT")).toBeInTheDocument();
      expect(screen.getByText("EXPERIENCE")).toBeInTheDocument();
      expect(screen.getByText("PROJECTS")).toBeInTheDocument();
    });

    it("renders three navigation buttons", () => {
      render(<NavBar />);

      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(3);
    });
  });

  describe("Click Navigation", () => {
    it("calls scrollTo when About button is clicked", async () => {
      const user = userEvent.setup();
      render(<NavBar />);

      const aboutButton = screen.getByRole("button", { name: /Navigate to ABOUT section/i });
      await user.click(aboutButton);

      expect(mockScrollTo).toHaveBeenCalled();
    });

    it("calls scrollTo when Experience button is clicked", async () => {
      const user = userEvent.setup();
      render(<NavBar />);

      const experienceButton = screen.getByRole("button", { name: /Navigate to EXPERIENCE section/i });
      await user.click(experienceButton);

      expect(mockScrollTo).toHaveBeenCalled();
    });

    it("calls scrollTo when Projects button is clicked", async () => {
      const user = userEvent.setup();
      render(<NavBar />);

      const projectsButton = screen.getByRole("button", { name: /Navigate to PROJECTS section/i });
      await user.click(projectsButton);

      expect(mockScrollTo).toHaveBeenCalled();
    });

    it("scrolls with smooth behavior", async () => {
      const user = userEvent.setup();
      render(<NavBar />);

      const aboutButton = screen.getByRole("button", { name: /Navigate to ABOUT section/i });
      await user.click(aboutButton);

      expect(mockScrollTo).toHaveBeenCalledWith(
        expect.objectContaining({
          behavior: "smooth",
        })
      );
    });
  });

  describe("Scroll Detection", () => {
    it("adds scroll event listener on mount", () => {
      const addEventListenerSpy = jest.spyOn(window, "addEventListener");
      render(<NavBar />);

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function),
        expect.objectContaining({ passive: true })
      );

      addEventListenerSpy.mockRestore();
    });

    it("removes scroll event listener on unmount", () => {
      const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
      const { unmount } = render(<NavBar />);

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function));

      removeEventListenerSpy.mockRestore();
    });

    it("uses passive scroll listener for performance", () => {
      const addEventListenerSpy = jest.spyOn(window, "addEventListener");
      render(<NavBar />);

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function),
        expect.objectContaining({ passive: true })
      );

      addEventListenerSpy.mockRestore();
    });
  });

  describe("Accessibility", () => {
    it("has navigation landmark with role and label", () => {
      render(<NavBar />);

      const nav = screen.getByRole("navigation", { name: /Main navigation/i });
      expect(nav).toBeInTheDocument();
    });

    it("has accessible button roles", () => {
      render(<NavBar />);

      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBeGreaterThan(0);
    });

    it("has descriptive aria-labels for navigation", () => {
      render(<NavBar />);

      expect(screen.getByLabelText(/Navigate to ABOUT section/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Navigate to EXPERIENCE section/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Navigate to PROJECTS section/i)).toBeInTheDocument();
    });

    it("indicates current page with aria-current", () => {
      render(<NavBar />);

      // About is active by default
      const aboutButton = screen.getByRole("button", { name: /Navigate to ABOUT section/i });
      expect(aboutButton).toHaveAttribute("aria-current", "true");
    });

    it("only active button has aria-current", () => {
      render(<NavBar />);

      const buttons = screen.getAllByRole("button");
      const buttonsWithCurrent = buttons.filter((btn) => btn.getAttribute("aria-current") === "true");

      // Only one button should have aria-current="true"
      expect(buttonsWithCurrent.length).toBe(1);
    });

    it("navigation buttons are keyboard accessible", () => {
      render(<NavBar />);

      const aboutButton = screen.getByRole("button", { name: /Navigate to ABOUT section/i });
      aboutButton.focus();
      expect(aboutButton).toHaveFocus();
    });

    it("allows keyboard navigation between buttons", () => {
      render(<NavBar />);

      const buttons = screen.getAllByRole("button");
      buttons[0].focus();
      expect(buttons[0]).toHaveFocus();

      // Simulate tab key
      buttons[1].focus();
      expect(buttons[1]).toHaveFocus();
    });
  });

  describe("Visual States", () => {
    it("renders navigation bars for visual indication", () => {
      const { container } = render(<NavBar />);

      // Each nav item has a visual bar (div with class "nav-bar")
      const navBars = container.querySelectorAll(".nav-bar");
      expect(navBars.length).toBe(3);
    });

    it("renders navigation text with proper styling classes", () => {
      const { container } = render(<NavBar />);

      // Each nav item has text with class "nav-text"
      const navTexts = container.querySelectorAll(".nav-text");
      expect(navTexts.length).toBe(3);
    });
  });

  describe("Navigation Structure", () => {
    it("renders navigation items in correct order", () => {
      render(<NavBar />);

      const buttons = screen.getAllByRole("button");
      expect(buttons[0]).toHaveTextContent("ABOUT");
      expect(buttons[1]).toHaveTextContent("EXPERIENCE");
      expect(buttons[2]).toHaveTextContent("PROJECTS");
    });

    it("uses uppercase text for navigation labels", () => {
      render(<NavBar />);

      expect(screen.getByText("ABOUT")).toBeInTheDocument();
      expect(screen.getByText("EXPERIENCE")).toBeInTheDocument();
      expect(screen.getByText("PROJECTS")).toBeInTheDocument();
    });
  });

  describe("Error Handling", () => {
    it("handles missing section elements gracefully", async () => {
      document.getElementById = jest.fn(() => null);
      const user = userEvent.setup();

      render(<NavBar />);

      const aboutButton = screen.getByRole("button", { name: /Navigate to ABOUT section/i });
      await user.click(aboutButton);

      // Should not throw error
      expect(mockScrollTo).not.toHaveBeenCalled();
    });
  });
});
