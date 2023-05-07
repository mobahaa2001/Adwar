import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle: {
        color: colors.black,
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 16,
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: 16,
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.lightBlue,
        borderStyle: "dotted",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        marginTop: 8,
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.lightBlue,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 28,
        marginTop: -4,
    },
    imageCont: {
        flexDirection: "row",
        marginRight: 8,
        marginTop: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    delete: {
        width: 24,
        height: 24,
        marginLeft: -16,
        marginTop: -10,
    },
    textarea: {
        minHeight: 150,
        paddingTop: 16,
    },
    button: {
        marginBottom: 160,

    }
})