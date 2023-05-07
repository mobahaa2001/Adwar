import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        width: 28,
        height: 28,
    },
    sectionTitle: {
        color: colors.textGrey,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 16,
    },
    item: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    button: {
        paddingVertical: 12,
        marginTop: 16,
    },
})