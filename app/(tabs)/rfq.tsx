import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RfqList from '../RFQ/rfqlist';
import RfqStatus from '../RFQ/rfqStatus';

// =================================================================

const THEME = {
    primary: '#007BFF',
    background: '#F7F9FC',
    cardBackground: '#FFFFFF',
    textPrimary: '#1E1E1E',
};

// =================================================================

const ScreenHeader = () => (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color={THEME.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>RFQ</Text>
        <View style={{ width: 28 }} />
    </View>
);

// =================================================================

const SegmentedControl = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => (
    <View style={styles.tabsContainer}>
        <TouchableOpacity
            style={[styles.tabButton, activeTab === 'list' && styles.activeTab]}
            onPress={() => setActiveTab('list')}
        >
            <Text style={[styles.tabText, activeTab === 'list' && styles.activeTabText]}>RFQ List</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.tabButton, activeTab === 'status' && styles.activeTab]}
            onPress={() => setActiveTab('status')}
        >
            <Text style={[styles.tabText, activeTab === 'status' && styles.activeTabText]}>RFQ Status</Text>
        </TouchableOpacity>
    </View>
);

// =================================================================

export default function RfqScreen() {
    const [activeTab, setActiveTab] = useState('list');

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={THEME.cardBackground} />
            <ScreenHeader />
            <SegmentedControl activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {activeTab === 'list' ? <RfqList /> : <RfqStatus />}
        </SafeAreaView>
    );
}

// =================================================================

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: THEME.cardBackground,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 25,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: THEME.textPrimary,
    },
    tabsContainer: {
        flexDirection: 'row',
        backgroundColor: '#F0F5FF',
        borderRadius: 50,
        padding: 5,
        marginHorizontal: 20,
        marginTop: 10,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: THEME.primary,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: THEME.primary,
    },
    activeTabText: {
        color: THEME.cardBackground,
    },
});