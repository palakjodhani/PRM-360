import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// =================================================================

const theme = {
    primary: '#0078FD',
    background: '#F7F9FC',
    cardBackground: '#FFFFFF',
    tableBackground: '#e5f1ff', 
    textPrimary: '#1E1E1E',
    textSecondary: '#6C757D',
    lineColor: '#EAEAEA',
    cardBorder: '#D0E4FF',
};

// =================================================================

const quoteData = {
    sender: {
        name: 'XXXX Technologies',
        line1: 'XXXXXXXX,',
        line2: 'XXXXXXXX',
        address: 'No 6, 10th Main road, garevebhavipalya,',
        city: 'Bangalore, KA - 560068.',
    },
    recipient: {
        to: 'To',
        name: 'XXXXXXXX,',
        line1: 'XXXXXXXX',
        address: 'No 6, 10th Main road, garevebhavipalya,',
        city: 'Bangalore, KA - 560068.',
    },
    rfqId: 'RFQ-2024-001',
    date: '13/11/2024',
    greeting: 'Dear Sir/Mam,',
    body: 'Thankyou for your valuable inquiry. We are pleased to quote as below.',
    products: [
        { id: 'p1', name: 'xxxxx Product (1)', price: '1,500.00' },
        { id: 'p2', name: 'xxxxx Product (1)', price: '1,500.00' },
    ],
    grandTotal: '1,500.00',
    closing: 'We hope you find our offer to be in line with your requirement.',
    signature: {
        forName: 'For, xxxxx User',
        title: 'AUTHORIZED SIGNATURE',
    },
};

// =================================================================

export default function Pdfscreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Feather
                            name="chevron-left"
                            size={28}
                            color={theme.primary}
                            onPress={() => router.back()}
                        />
                        <Text style={styles.headerTitle}>{quoteData.rfqId} - Preview</Text>
                    </View>

                    <View style={styles.documentCard}>
                        <View style={styles.cardHeader}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.companyName}>{quoteData.sender.name}</Text>
                                <Text style={styles.addressTextWhite}>{quoteData.sender.line1}</Text>
                                <Text style={styles.addressTextWhite}>{quoteData.sender.line2}</Text>
                                <Text style={styles.addressTextWhite}>{quoteData.sender.address}</Text>
                                <Text style={styles.addressTextWhite}>{quoteData.sender.city}</Text>
                            </View>
                            <View style={styles.quotationContainer}>
                                <Text style={styles.quotationText}>Quotation</Text>
                            </View>
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.infoRow}>
                                <View style={{ flex: 1, marginRight: 8 }}>
                                    <Text style={styles.label}>{quoteData.recipient.to}</Text>
                                    <Text style={styles.bodyText}>{quoteData.recipient.name}</Text>
                                    <Text style={styles.bodyText}>{quoteData.recipient.line1}</Text>
                                    <Text style={styles.bodyText}>{quoteData.recipient.address}</Text>
                                    <Text style={styles.bodyText}>{quoteData.recipient.city}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={styles.label}>{quoteData.rfqId}</Text>
                                    <Text style={styles.bodyText}>{quoteData.date}</Text>
                                </View>
                            </View>

                            <View style={{ marginBottom: 25 }}>
                                <Text style={styles.bodyText}>{quoteData.greeting}</Text>
                                <Text style={styles.bodyText}>{quoteData.body}</Text>
                            </View>

                            <View style={styles.productTable}>
                                {quoteData.products.map((item) => (
                                    <View key={item.id} style={styles.productRow}>
                                        <View>
                                            <Text style={styles.productName}>{item.name}</Text>
                                            <Text style={styles.productPriceSub}>₹{item.price}</Text>
                                        </View>
                                        <Text style={styles.productPrice}>₹{item.price}</Text>
                                    </View>
                                ))}
                                <View style={styles.grandTotalRow}>
                                    <Text style={styles.grandTotalText}>Grand Total</Text>
                                    <Text style={styles.grandTotalText}>₹{quoteData.grandTotal}</Text>
                                </View>
                            </View>

                            <Text style={[styles.bodyText, { marginBottom: 40 }]}>{quoteData.closing}</Text>

                            <View style={styles.signatureSection}>
                                <Text style={styles.signatureFor}>{quoteData.signature.forName}</Text>
                                <View >
                                    <Text style={styles.authorizedText}>{quoteData.signature.title}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

// =================================================================

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: theme.background,

    },
    container: {
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 50,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.textPrimary,
        marginLeft: 20,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingBottom: 40,
    },
    documentCard: {
        backgroundColor: theme.cardBackground,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: theme.cardBorder,
        elevation: 5,
        shadowRadius: 8,
        overflow: 'hidden',
    },
    cardHeader: {
        backgroundColor: theme.primary,
        padding: 25,
        flexDirection: 'row',

        justifyContent: 'space-between',
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    addressTextWhite: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 21,
    },
    quotationContainer: {
        alignItems: 'center',
    },
    quotationText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 8,
    },
    cardBody: {
        padding: 25,

    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.textPrimary,
        marginBottom: 8,
    },
    
    
    bodyText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 400,
    },
    productTable: {
        backgroundColor: theme.tableBackground,
        borderRadius: 30,
        padding: 20,
        marginBottom: 30,
    },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    productName: {
        fontSize: 15,
        color: theme.textPrimary,
        fontWeight: '500',
    },
    productPriceSub: {
        fontSize: 13,
        color: theme.textSecondary,
        marginTop: 4,
        fontWeight: 800
    },
    productPrice: {
        fontSize: 15,
        color: theme.textPrimary,
        fontWeight: 'bold',
    },
    grandTotalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1.5,
        borderTopColor: '#DDEBFF',
        paddingTop: 15,
        marginTop: 5,
    },
    grandTotalText: {
        fontSize: 16,
        color: theme.textPrimary,
        fontWeight: 'bold',
    },
    signatureSection: {
        alignItems: 'flex-end',
        marginTop: 20,
        marginBottom: 20,
    },
    signatureFor: {
        fontSize: 14,
        color: theme.textPrimary,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 40,
    },
    signatureLine: {
        borderTopWidth: 1,
        borderTopColor: theme.textSecondary,
        paddingTop: 10,
        width: '55%',
        alignItems: 'center',
    },
    authorizedText: {
        fontSize: 12,
        color: theme.textSecondary,
        fontWeight: '600',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
});