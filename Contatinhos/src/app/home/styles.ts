import { StyleSheet } from "react-native"
import { theme } from "@/theme/index"
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray_200,
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: "flex-end",
        paddingHorizontal: 24,
    },
    input: {
        marginBottom: 27,
    },
    section: {
        fontSize: 18,
        fontFamily:theme.fontFamily.bold,
        backgroundColor: theme.colors.blue,
        width: 35,
        height: 35,
        color: theme.colors.white,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 12,
        marginLeft: 15,
    },
    contentList: {
        padding: 24,
        gap: 10,
    },
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: theme.colors.gray_300,
        margin: 12,
    },
    bottomSheetContent: {
        flex: 1,
        backgroundColor: theme.colors.gray_100,
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        paddingTop: 64,
        alignItems: "center",
        padding: 32,
    },
    contactName: {
        fontSize: 32,
        fontFamily: theme.fontFamily.bold,
    },
    phone: {
        marginBottom: 25,
        gap: 10,
        flexDirection: "row",
    },
    phoneNumber: {
        fontSize: 18,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.gray_400,
    },
    bottomSheet: {
        backgroundColor: "tranparent",
    },
    image: {
        marginBottom: -50,
        zIndex: 1,
        alignSelf: "center",
    },
})