type StageForWithoutAccount = {
    Component: (nextHundller: () => Promise<void>, doubleNextHundller: () => Promise<void>,doubleBackHundler: () => Promise<void>, backHundller: () => Promise<void>, finshHundller: () => Promise<void>) => JSX.Element;
    Verifyier: () => Promise<boolean>;
    Submit: () => Promise<boolean>;
}
