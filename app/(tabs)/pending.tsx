import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// =================================================================
const THEME = {
    primary: '#3B82F6',
    background: '#FFFFFF',
    textPrimary: '#1E1E1E',
    textSecondary: '#6C757D',
    cardBorder: '#c5dcf6',
    approveGreen: '#63B901',
    rejectRed: '#FE5269',
    filterBorder: '#E0E0E0',
};

// =================================================================
interface ApprovalItem {
    id: string;
    title: string;
    date: string;
}
// =================================================================
const approvalData: ApprovalItem[] = [
    { id: 'RFQ-2024-001', title: 'Supply of Laboratory Kits', date: '2019-12-14' },
    { id: 'RFQ-2024-002', title: 'Office Furniture Procurement', date: '2019-12-14' },
    { id: 'RFQ-2024-003', title: 'IT Hardware Purchase', date: '2019-12-14' },
];

// =================================================================

const ApprovalCard = ({ item }: { item: ApprovalItem }) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.id} - {item.title}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
        <View style={styles.cardActionsRow}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.approveButton}>
                    <Feather name="check" size={16} color="white" />
                    <Text style={styles.buttonText}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectButton}>
                    <Feather name="x" size={16} color="white" />
                    <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => alert(`Viewing details for ${item.id}`)}>
                <Feather name="chevron-right" size={24} color={THEME.primary} />
            </TouchableOpacity>
        </View>
    </View>
);

// =================================================================
export default function PendingApprovalsScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 120 }}
                showsVerticalScrollIndicator={false}
            >
                <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={28} color={THEME.primary} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Pending Approvals</Text>
                    <View style={{ width: 28 }} />
                </View>
                <View style={styles.filterContainer}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Filter by Status</Text>
                        <MaterialCommunityIcons name="filter-variant" size={16} color={THEME.textSecondary} />
                    </TouchableOpacity>
                </View>

                {approvalData.map((item) => (
                    <ApprovalCard key={item.id} item={item} />
                ))}

              <View style={{ flexDirection: 'column' }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Image
                            source={require('../../assets/images/bg/shine1.png')}
                            style={{ width: 70, height: 70, resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-end', marginTop: 10, marginRight: 50 }}>
                        <Image
                            source={require('../../assets/images/bg/shine2.png')}
                            style={{ width: 40, height: 40, resizeMode: 'contain' }}
                        />
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

// =================================================================
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: THEME.background,
        paddingTop: '5%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 25,
        paddingBottom: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: THEME.textPrimary,
    },
    filterContainer: {
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.background,
        borderWidth: 1.5,
        borderColor: THEME.cardBorder,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    filterText: {
        color: THEME.textSecondary,
        marginRight: 8,
    },
    card: {
        backgroundColor: THEME.background,
        borderRadius: 16,
        marginHorizontal: 20,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: THEME.cardBorder,
        padding: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: THEME.textPrimary,
        lineHeight: 22,
    },
    cardDate: {
        fontSize: 14,
        color: THEME.textSecondary,
        marginTop: 4,
    },
    cardActionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    buttonRow: {
        flexDirection: 'row',
    },
    approveButton: {
        backgroundColor: THEME.approveGreen,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 8,
    },
    rejectButton: {
        backgroundColor: THEME.rejectRed,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        marginLeft: 6,
        fontSize: 14,
    },

});