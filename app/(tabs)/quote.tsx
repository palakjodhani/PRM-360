import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// =================================================================

const theme = {
    primary: '#0078FD',
    background: '#F7F9FC',
    cardBackground: '#FFFFFF',
    textPrimary: '#1E1E1E',
    textSecondary: '#6C757D',
    cardBorder: '#D0E4FF',
    approvedBg: '#28A745',
    approvedText: '#FFFFFF',
    pendingBg: '#FD7E14',
    pendingText: '#FFFFFF',
};

// =================================================================

interface QuoteItem {
    id: string;
    rfqId: string;
    title: string;
    date: string;
    amount: string;
    status: 'Approved' | 'Pending';
}

// =================================================================

const quoteData: QuoteItem[] = [
    { id: '1', rfqId: 'RFQ-2024-001', title: 'Supply of Laboratory Kits', date: '2019-12-14', amount: '2,723.00', status: 'Approved' },
    { id: '2', rfqId: 'RFQ-2024-002', title: 'Office Furniture Procurement', date: '2019-12-14', amount: '2,723.00', status: 'Pending' },
    { id: '3', rfqId: 'RFQ-2024-003', title: 'IT Hardware Purchase', date: '2019-12-14', amount: '2,723.00', status: 'Pending' },
    { id: '4', rfqId: 'RFQ-2024-004', title: 'Pharmaceutical Supplies', date: '2019-12-14', amount: '2,723.00', status: 'Approved' },
    { id: '5', rfqId: 'RFQ-2024-005', title: 'Manufacturing Equipment', date: '2019-12-14', amount: '2,723.00', status: 'Pending' },
    { id: '6', rfqId: 'RFQ-2024-006', title: 'Office Stationery', date: '2019-12-14', amount: '2,723.00', status: 'Pending' },
];

// =================================================================

interface ListHeaderProps {
    onBackPress: () => void;
}

// =================================================================

const ListHeader = ({ onBackPress }: ListHeaderProps) => (
    <View>
        <View style={styles.titleContainer}>
            <TouchableOpacity onPress={onBackPress}>
                <Feather name="chevron-left" size={28} color={theme.primary} />
            </TouchableOpacity>
            <Text style={styles.titleText}>Quote</Text>
            <View style={{ width: 28 }} />
        </View>

        <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Filter by Status</Text>
                <MaterialCommunityIcons name="filter-variant" size={16} color={theme.textSecondary} style={{ marginLeft: 8 }} />
            </TouchableOpacity>
        </View>
    </View>
);

// =================================================================

const QuoteCard = ({ item }: { item: QuoteItem }) => {
    const isApproved = item.status === 'Approved';
    const statusPillStyle = { backgroundColor: isApproved ? theme.approvedBg : theme.pendingBg };
    const statusTextStyle = { color: isApproved ? theme.approvedText : theme.pendingText };

    return (
        <View style={styles.card}>
            <View style={styles.cardTopRow}>
                <Text style={styles.rfqId}>{item.rfqId}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.cardBottomRow}>
                <Text style={styles.amountText}>$ {item.amount}</Text>
                <View style={styles.statusSection}>
                    <View style={[styles.statusPill, statusPillStyle]}>
                        <Text style={[styles.statusText, statusTextStyle]}>{item.status}</Text>
                    </View>
                    {/* *** મુખ્ય ફેરફાર: ફક્ત એરોને Touchable બનાવ્યો *** */}
                    {/* <TouchableOpacity onPress={() => alert(`Navigating to details of ${item.rfqId}`)}> */}
                    <TouchableOpacity onPress={() => router.replace("/quotes/quotedata")}>
                        <Feather name="chevron-right" size={24} color={theme.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


// =================================================================

export default function QuoteScreen({ onBackPress }: { onBackPress: () => void }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={quoteData}

                renderItem={({ item }: { item: QuoteItem }) => <QuoteCard item={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<ListHeader onBackPress={onBackPress} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

// =================================================================

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: theme.background,
        paddingTop: 50,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.textPrimary,
    },
    filterContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        marginBottom: 15,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.cardBackground,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 50,
        borderWidth: 1.7,
        borderColor: theme.cardBorder,
    },
    filterText: {
        color: theme.textSecondary,
        fontSize: 14,
    },
    card: {
        backgroundColor: theme.cardBackground,
        borderRadius: 16,
        padding: 18,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: theme.cardBorder,
        shadowColor: '#dcebff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginHorizontal: 20,
    },
    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    rfqId: {
        fontSize: 14,
        color: theme.textSecondary,
    },
    dateText: {
        fontSize: 14,
        color: theme.textSecondary,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: theme.textPrimary,
        marginBottom: 12,
    },
    cardBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amountText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.textPrimary,
    },
    statusSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusPill: {
        paddingHorizontal: 16,
        paddingVertical: 7,
        borderRadius: 50,
        marginRight: 8,
    },
    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});