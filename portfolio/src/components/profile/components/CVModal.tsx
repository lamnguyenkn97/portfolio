import React, { useEffect, useRef } from "react";
import { Dialog, DialogContent, IconButton, Box, Button, Stack, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faDownload } from "@fortawesome/free-solid-svg-icons";
import { config } from "../../../config/constants";

interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

export const CVModal = ({ open, onClose }: CVModalProps) => {
  const theme = useTheme();
  const [iframeError, setIframeError] = React.useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (open && iframeRef.current) {
      // Reset error state when modal opens
      setIframeError(false);
      // Set a timeout to check if iframe loaded
      const timeout = setTimeout(() => {
        try {
          const iframe = iframeRef.current;
          if (iframe && iframe.contentWindow) {
            // Iframe loaded successfully
            setIframeError(false);
          }
        } catch (e) {
          // Cross-origin or loading error
          console.error("CV iframe error:", e);
        }
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  const handleDownloadPDF = () => {
    // Open CV in new window and trigger print dialog
    const cvWindow = window.open(config.resumeUrl, "_blank");
    if (cvWindow) {
      cvWindow.onload = () => {
        // Small delay to ensure content is loaded
        setTimeout(() => {
          cvWindow.print();
        }, 500);
      };
    }
  };

  const handleIframeLoad = () => {
    setIframeError(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      aria-labelledby="cv-modal-title"
      aria-describedby="cv-modal-description"
      PaperProps={{
        sx: {
          bgcolor: "background.default",
          ...theme.custom.borders.spotify,
          maxHeight: "90vh",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          position: "relative",
          height: "80vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header with actions */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            p: theme.spacing(1.5),
            zIndex: theme.zIndex.modal + 1,
            bgcolor: "background.default",
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            startIcon={<FontAwesomeIcon icon={faDownload} />}
            onClick={handleDownloadPDF}
            aria-label="Download CV as PDF"
            sx={{
              textTransform: "none",
              borderColor: "divider",
              color: "text.primary",
              "&:hover": {
                borderColor: "primary.main",
                color: "primary.main",
              },
            }}
          >
            Download PDF
          </Button>
          <IconButton
            onClick={onClose}
            sx={{
              bgcolor: "background.paper",
              color: "text.primary",
              border: `1px solid ${theme.palette.divider}`,
              "&:hover": {
                bgcolor: "background.paper",
                borderColor: "primary.main",
                color: "primary.main",
              },
            }}
            aria-label="Close CV"
          >
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </Stack>

        {/* CV iframe */}
        {iframeError ? (
          <Box
            sx={{
              flex: 1,
              mt: theme.spacing(7),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              p: theme.spacing(3),
            }}
          >
            <Box sx={{ mb: theme.spacing(2), color: "text.secondary" }}>
              Unable to load CV. Please try opening it directly:
            </Box>
            <Button
              variant="outlined"
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open CV in New Tab
            </Button>
          </Box>
        ) : (
          <Box
            component="iframe"
            ref={iframeRef}
            src={config.resumeUrl}
            title="Lam Nguyen CV"
            onLoad={handleIframeLoad}
            sx={{
              width: "100%",
              height: "100%",
              border: 0,
              flex: 1,
              mt: theme.spacing(7), // Account for header height
              bgcolor: "background.paper",
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
