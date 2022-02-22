type Stage = {
    Component: (nextHundller: () => Promise<void>, backHundller: () => Promise<void>,finshHundller: () => Promise<void>) => JSX.Element;
    Verifyier: () => Promise<boolean>;
    Submit:() =>Promise<boolean>;
}
