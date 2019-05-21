import StyleSheet from "react-native-extended-stylesheet";

export const Styles = StyleSheet.create({
    modal: {
        position: "relative"
    },
    content: {
        flex: 1,
        flexDirection: "column",
    },
    container: {
        flex: 1
    },
    login: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
    },
    wrapper: {
        flexGrow: 0,
        alignItems: "center"
    },
    button: {
        width: 250,
        margin: 3
    },
    label: {
        flex: 1,
        textAlign: "center"
    },
    spinnerContainer: {
        position: "absolute",
        flex: 1,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    errors: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        textAlign: "center",
        left: 0,
        top: 50,
        right: 0,
        padding: 8
    },
    errorText: {
        color: "red",
        textAlign: "center"
    }
});