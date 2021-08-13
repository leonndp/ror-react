import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "./../documents/Crunch-ROR_SOW.pdf";

import { Box, Button, Container, MobileStepper, Zoom } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "3rem auto",
  },
  page: {
    maxWidth: "100% !important",
    "& .react-pdf__Page__canvas": {
      height: "100% !important",
    },
  },
  stepper: {
    /* position: "absolute", */
  },
}));

const SOW = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [stepperView, setStepperView] = useState(false);

  const theme = useTheme();
  const classes = useStyles();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNext = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handleBack = () => {
    setPageNumber((prev) => prev - 1);
  };

  const handleShowStepper = () => {
    setStepperView(true);
  };

  const handleHideStepper = () => {
    setStepperView(false);
  };

  return (
    <Container className={classes.container}>
      <Box textAlign="center">
        <Box
          display="inline-block"
          maxHeight="100% !important"
          maxWidth="100%"
          margin="auto"
          position="relative"
          onMouseEnter={handleShowStepper}
          onMouseLeave={handleHideStepper}
        >
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page className={classes.page} pageNumber={pageNumber} />
          </Document>
          <Zoom in={stepperView}>
            <MobileStepper
              steps={numPages}
              top={0}
              variant="text"
              activeStep={pageNumber - 1}
              position="static"
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={pageNumber === numPages}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={pageNumber === 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Zoom>
        </Box>
      </Box>
    </Container>
  );
};

export default SOW;
