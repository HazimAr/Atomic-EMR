import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToken,
} from "@chakra-ui/react";
import Container from "../container";
import ContainerInside from "../containerInside";

export default function () {
  const primary = useToken("colors", "primary");
  return (
    <Container h="100vh" overflow="hidden" position="relative">
      {/* <style>{`
        @keyframes move {
          0%   { transform: scale(1)      translate(10px, -30px); }
          38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
          40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
          78%  { transform: scale(1.3)    translate(0vw, 50vh)  rotate(-20deg); }
          80%  { transform: scale(1.3)    translate(0vw, 50vh)  rotate(-20deg); }
          100% { transform: scale(1)      translate(10px, -30px); }
        }
        `}</style>
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          fill: primary,
          width: "50vmax",
          zIndex: -1,
          animation: "move 10s ease-in-out infinite",
          transformOrigin: "50% 50%",
        }}
      >
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 350"
        >
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </Box> */}
      <Box
        position="absolute"
        zIndex="-1"
        display="flex"
        justifyContent="center"
        width="50%"
        left="-25px"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="100%"
          id="blobSvg"
          transform="rotate(0)"
        >
          <path id="blob" fill="url(#gradient)" style={{ opacity: 1 }}>
            {" "}
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
            ></animate>{" "}
          </path>{" "}
          <defs>
            {" "}
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              {" "}
              <stop
                offset="0%"
                style={{ stopColor: "rgb(67, 150, 214)" }}
              ></stop>{" "}
              <stop
                offset="100%"
                style={{ stopColor: "rgb(28, 83, 125)" }}
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
        </svg>
      </Box>
      <ContainerInside>
        <HStack justify="space-between">
          <Stack position="relative">
            <Heading>Atomic EMR</Heading>
            <Text maxW="60ch">
              Your one stop shop to next-generation simple physical therapy
              charting management software system.
            </Text>
          </Stack>
          <Image src="/hero.svg" alt="hero svg" />
        </HStack>
      </ContainerInside>
    </Container>
  );
}
