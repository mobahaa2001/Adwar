import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        marginVertical: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: "500"
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.lightBlue,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: "center"
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal:16,
        
    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal:16,
        transform: [{rotate: "90deg"}]
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightBlue,
    },
    modalWrapper: {
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

    },
    modalContant: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        width: "80%",
    },
    headerTitle: {
        fontSize: 16,
        marginBottom: 16,
        color: colors.black,

    },
    optionText: {
        paddingVertical: 4,
        color: colors.black,
        fontSize: 15,
    },
    selectedOption: {
        color: colors.blue,
        fontWeight: "bold",
    }
})