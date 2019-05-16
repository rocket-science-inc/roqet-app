import StyleSheet from "react-native-extended-stylesheet";

export const Styles = StyleSheet.create({
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
        justifyContent: "center"
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
    }
});