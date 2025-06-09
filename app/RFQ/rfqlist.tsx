import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';


// =================================================================
const THEME = {
    primary: '#007BFF',
    background: '#FFFFFF',
    cardBackground: '#FFFFFF',
    textPrimary: '#1E1E1E',
    textSecondary: '#6C757D',
    cardBorder: '#C5DDFB',
    openGreen: '#84CC16',
    pendingOrange: '#F9A825',
};

// =================================================================
const rfqListData = [
    { id: '1', rfqId: 'RFQ-2024-001', title: 'Supply of Laboratory Kits', status: 'Open' },
    { id: '2', rfqId: 'RFQ-2024-003', title: 'IT Hardware Purchase', status: 'Pending' },
    { id: '3', rfqId: 'RFQ-2024-002', title: 'Office Furniture Procurement', status: 'Open' },
    { id: '4', rfqId: 'RFQ-2024-004', title: 'Pharmaceutical Supplies', status: 'Pending' },
    { id: '5', rfqId: 'RFQ-2024-005', title: 'Manufacturing Equipment', status: 'Pending' },
];

// =================================================================

const RfqListCard = ({ item }: { item: typeof rfqListData[0] }) => {
    const isStatusOpen = item.status === 'Open';
    return (
        <View style={styles.card}>
            <View style={styles.cardTextContainer}>
                <Text style={styles.rfqIdText}>{item.rfqId}</Text>
                <Text style={styles.rfqTitleText}>{item.title}</Text>
            </View>

            <View style={styles.cardButtonContainer}>
                <View style={[styles.statusPill, { backgroundColor: isStatusOpen ? THEME.openGreen : THEME.pendingOrange }]}>
                    <Text style={styles.statusPillText}>{item.status}</Text>
                </View>
            </View>
        </View>
    );
};


// =================================================================

export default function RfqList() {
    const [isCalendarVisible, setCalendarVisible] = useState(false);

    return (
        <View style={styles.contentContainer}>
            <View style={styles.filterBar}>
                <TouchableOpacity style={styles.statusDropdown}>
                    <Text style={styles.filterText}>Status</Text>
                    <Feather name="chevron-down" size={20} color={THEME.textSecondary} />
                </TouchableOpacity>
                <View style={styles.searchInputContainer}>
                    <Feather name="search" size={20} color={THEME.textSecondary} />
                    <TextInput
                        placeholder="Search by status"
                        style={styles.searchInput}
                        placeholderTextColor={THEME.textSecondary}
                    />
                </View>
                <TouchableOpacity style={styles.calendarButton} onPress={() => setCalendarVisible(true)}>
                    <FontAwesome name="calendar" size={22} color={THEME.primary} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={rfqListData}
                renderItem={RfqListCard}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />

            <Modal
                transparent={true}
                visible={isCalendarVisible}
                onRequestClose={() => setCalendarVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setCalendarVisible(false)}
                >
                    <View style={styles.calendarContainer} onStartShouldSetResponder={() => true}>
                        <Calendar onDayPress={() => setCalendarVisible(false)} />
                    </View>
                </TouchableOpacity>
            </Modal>
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
    filterBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    statusDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.cardBackground,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1.5,
        borderColor: THEME.cardBorder,
        marginRight: 10,
    },
    filterText: {
        color: THEME.textSecondary,
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.cardBackground,
        borderRadius: 50,
        paddingHorizontal: 15,
        borderWidth: 1.5,
        borderColor: THEME.cardBorder,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        marginLeft: 8,
    },
    calendarButton: {
        padding: 5,
    },
    card: {
        backgroundColor: THEME.cardBackground,
        borderRadius: 15,
        paddingHorizontal: 18,
        paddingVertical: 12,
        marginHorizontal: 20,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: THEME.cardBorder,
    },
    
    cardTextContainer: {
        flex: 1.5,
    },
    cardButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    rfqIdText: {
        fontSize: 12,
        color: THEME.textSecondary,
        marginBottom: 4,
    },
    rfqTitleText: {
        fontSize: 16,
        fontWeight: '600',
        color: THEME.textPrimary,
    },
    statusPill: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    statusPillText: {
        fontSize: 14,
        fontWeight: '600',
        color: THEME.cardBackground,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarContainer: {
        backgroundColor: THEME.cardBackground,
        borderRadius: 10,
        padding: 10,
        width: '90%',
    },
});