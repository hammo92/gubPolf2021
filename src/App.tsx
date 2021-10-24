import { ChakraProvider } from "@chakra-ui/react";
import theme from "definitions/chakra/theme";
import { StyledThemeProvider } from "definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "pages";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={theme}>
      <StyledThemeProvider>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <Home />
          </div>
        </QueryClientProvider>
      </StyledThemeProvider>
    </ChakraProvider>
  );
}

export default App;
