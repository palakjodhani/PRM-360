import { Feather } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// =================================================================
const THEME = {
    primary: '#007BFF',
    background: '#F7F9FC',
    cardBackground: '#FFFFFF',
    textPrimary: '#1E1E1E',
    textSecondary: '#6C757D',
    cardBorder: '#C5DDFB',
    invitedTeal: '#20C997',
    quotedYellow: '#FFC107',
};

// =================================================================
const rfqStatusData = [
    { id: '1', rfqId: 'RFQ-2024-001', title: 'Supply of Laboratory Kits', date: '2019-12-14', amount: '2,723.00', status: 'Invited' },
    { id: '2', rfqId: 'RFQ-2024-002', title: 'Office Furniture Procurement', date: '2019-12-14', amount: '2,723.00', status: 'Quoted' },
    { id: '3', rfqId: 'RFQ-2024-003', title: 'IT Hardware Purchase', date: '2019-12-14', amount: '2,723.00', status: 'Quoted' },
    { id: '4', rfqId: 'RFQ-2024-004', title: 'Pharmaceutical Supplies', date: '2019-12-14', amount: '2,723.00', status: 'Invited' },
    { id: '5', rfqId: 'RFQ-2024-005', title: 'Manufacturing Equipment', date: '2019-12-14', amount: '2,723.00', status: 'Quoted' },
];

// =================================================================

const RfqStatusCard = ({ item }: { item: typeof rfqStatusData[0] }) => {
    const isStatusInvited = item.status === 'Invited';
    return (
        <View style={styles.card}>
            <View style={styles.cardLeftContainer}>
                <Text style={styles.rfqIdText}>{item.rfqId}</Text>
                <Text style={styles.rfqTitleText}>{item.title}</Text>
                <Text style={styles.rfqAmountText}>$ {item.amount}</Text>
            </View>

            <View style={styles.cardRightContainer}>
                <Text style={styles.rfqDateText}>{item.date}</Text>
                <View style={styles.statusActionContainer}>
                    <View style={[styles.statusPill, { backgroundColor: isStatusInvited ? THEME.invitedTeal : THEME.quotedYellow }]}>
                        <Text style={styles.statusPillText}>{item.status}</Text>
                    </View>
                    <TouchableOpacity>
                        <Feather name="chevron-right" size={24} color={THEME.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// =================================================================
export default function RfqStatus() {
    return (
        <View style={styles.contentContainer}>
            <FlatList
                data={rfqStatusData}
                renderItem={RfqStatusCard}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 20 }}
            />
        </View>
    );
};

// =================================================================
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: THEME.background,
        paddingTop: 5,
    },
    card: {
        backgroundColor: THEME.cardBackground,
        borderRadius: 15,
        padding: 18,
        marginHorizontal: 20,
        marginBottom: 12,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: THEME.cardBorder,
        alignItems: 'flex-start',
    },
    cardLeftContainer: {
        flex: 1, 
        marginRight: 10,
    },
    cardRightContainer: {
        flex: 1, 
        alignItems: 'flex-end', 
    },
    rfqIdText: {
        fontSize: 14,
         fontWeight: '500',
        color: THEME.textSecondary,
        marginBottom: 4,
    },
    rfqDateText: {
        fontSize: 12,
          fontWeight: '500',
        color: THEME.textSecondary,
        marginBottom: 4,
    },
    rfqTitleText: {
        fontSize: 16,
        fontWeight: '600',
        color: THEME.textPrimary,
    },
    rfqAmountText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: THEME.textPrimary,
        marginTop: 12, 
    },
    statusPill: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 50,
        marginRight: 8, 
    },
    statusPillText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: THEME.cardBackground,
    },
    statusActionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 26, 
    },
});