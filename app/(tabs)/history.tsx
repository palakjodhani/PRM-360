import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

// =================================================================
const THEME = {
    primary: '#3B82F6',
    background: '#FFFFFF',
    textPrimary: '#1E1E1E',
    textSecondary: '#6C757D',
    cardBorder: '#C5DDFB',
    approveGreen: '#84CC16',
    rejectRed: '#FE5269',
    filterBorder: '#E0E0E0',
    inputBackground: '#F7F9FC',
};

// =================================================================
interface HistoryItem {
    id: string;
    title: string;
    date: string;
    amount: string;
    status: 'Approved' | 'Rejected';
}

// =================================================================
const historyData: HistoryItem[] = [
    { id: 'RFQ-2024-001', title: 'Supply of Laboratory Kits', date: '2019-12-14', amount: '2,723.00', status: 'Approved' },
    { id: 'RFQ-2024-002', title: 'Office Furniture Procurement', date: '2019-12-14', amount: '2,723.00', status: 'Rejected' },
    { id: 'RFQ-2024-003', title: 'IT Hardware Purchase', date: '2019-12-14', amount: '2,723.00', status: 'Rejected' },
];

// =================================================================
const HistoryCard = ({ item }: { item: HistoryItem }) => {
    const isApproved = item.status === 'Approved';
    const statusPillStyle = isApproved ? styles.approvedPill : styles.rejectedPill;

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.id} - {item.title}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
            <View style={styles.cardBottomRow}>
                <Text style={styles.cardAmount}>$ {item.amount}</Text>
                <View style={styles.statusActionContainer}>
                    <View style={[styles.statusPill, statusPillStyle]}>
                        <Text style={styles.statusPillText}>{item.status}</Text>
                    </View>
                    <TouchableOpacity onPress={() => alert(`Viewing details for ${item.id}`)}>
                        <Feather name="chevron-right" size={24} color={THEME.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


// =================================================================
export default function ApprovalHistoryScreen() {
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const onDaySelect = (day: { dateString: string }) => {
        setSelectedDate(day.dateString);
        setCalendarVisible(false);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}><Ionicons name="chevron-back" size={28} color={THEME.primary} /></TouchableOpacity>
                    <Text style={styles.headerTitle}>Approval History</Text>
                    <View style={{ width: 28 }} />
                </View>
                <View style={styles.filterBar}>
                    <TouchableOpacity style={styles.statusDropdown}>
                        <Text style={styles.filterText}>Status</Text>
                        <Feather name="chevron-down" size={20} color={THEME.textSecondary} />
                    </TouchableOpacity>
                    <View style={styles.searchInputContainer}>
                        <Feather name="search" size={20} color={THEME.textSecondary} />
                        <TextInput placeholder="Search by status" style={styles.searchInput} placeholderTextColor={THEME.textSecondary} />
                    </View>
                    <TouchableOpacity style={styles.calendarButton} onPress={() => setCalendarVisible(true)}>
                        <FontAwesome name="calendar" size={22} color={THEME.primary} />
                    </TouchableOpacity>
                </View>

                {historyData.map((item) => (
                    <HistoryCard key={item.id} item={item} />
                ))}
                <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, marginTop: 0 }}><Image source={require('../../assets/images/bg/shine1.png')} style={{ width: 70, height: 70 }} /></View>
                <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, marginRight: 30 }}><Image source={require('../../assets/images/bg/shine2.png')} style={{ width: 40, height: 40 }} /></View>

            </ScrollView>

            <Modal
                transparent={true}
                animationType="fade"
                visible={isCalendarVisible}
                onRequestClose={() => setCalendarVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setCalendarVisible(false)}
                >
                    <View style={styles.calendarContainer} onStartShouldSetResponder={() => true}>
                        <Calendar
                            onDayPress={onDaySelect}
                            markedDates={{ [selectedDate]: { selected: true, selectedColor: THEME.primary, disableTouchEvent: true } }}
                            theme={{
                                todayTextColor: THEME.primary,
                                arrowColor: THEME.primary,
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: 'bold',
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
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
        paddingHorizontal: 25,
        paddingVertical: 25,
        paddingBottom: 15,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: THEME.textPrimary,
    },
    filterBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    statusDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: THEME.cardBorder,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    filterText: {
        color: THEME.textSecondary,
        marginRight: 8,
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.inputBackground,
        borderWidth: 1.5,
        borderColor: THEME.cardBorder,
        borderRadius: 50,
        paddingHorizontal: 12,
        marginHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        paddingVertical: 10,
        color: THEME.textPrimary,
    },
    calendarButton: {
        padding: 10,
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
    cardBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    cardAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: THEME.textPrimary,
    },
    statusActionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusPill: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 8,
    },
    approvedPill: {
        backgroundColor: THEME.approveGreen,
    },
    rejectedPill: {
        backgroundColor: THEME.rejectRed,
    },
    statusPillText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        elevation: 10,
    },
});