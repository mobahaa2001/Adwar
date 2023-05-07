import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    container: {
        // borderWidth: 1,
    },
    image:{
        width: "100%",
        height: height * 0.55,
        borderWidth: 1,
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24,
        
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: "500",
        color: colors.black,
    },
    price: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 8,
        color: colors.black,
    },
    description: {
        color: colors.textGrey,
        fontWeight: "300",
        marginVertical: 8,
    },
    footer: {
        padding: 24,
        flexDirection: "row",
        alignItems: "center",
    },
    bookmarkContainer: {
        backgroundColor: colors.lightGrey,
        padding: 18,
        borderRadius: 8,
        marginRight: 16,
    },
    bookmarkIcon: {
        width: 28,
        height: 28,
    },
    backContainer: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 8,
        margin: 16,
        position: "absolute",
    },
    backIcon: {
        width: 24,
        height: 24,
    },
})