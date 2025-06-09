import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// =================================================================

const theme = {
    primary: '#0078FD',
    background: '#F0F5FF',
    textPrimary: '#1E1E1E',
    textSecondary: '#6C757D',
    white: '#FFFFFF',
    cardBorder: '#D0E4FF',
};

// =================================================================

interface DashboardCardProps {
    title: string;
    children: React.ReactNode;
}

// =================================================================

const DashboardCard = ({ title, children }: DashboardCardProps) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.cardContent}>{children}</View>
        <View style={styles.cardFooter}>
            <Text style={styles.viewMore}>View more</Text>
            <TouchableOpacity style={styles.arrowButton}>
                <Image
                    source={require('../../assets/images/icon/arrow.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    </View>
);

// =================================================================

export default function DashboardScreen() {
    return (
        <View style={styles.safeArea}>
            <Image
                source={require('../../assets/images/bg/dashboardbg.png')}
                style={styles.backgroundImage}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/images/logo/logo.png')}
                        style={styles.logo}
                    />
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/icon/profile.png')}
                            style={styles.profileIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.welcomeContainer}>
                    <Feather name="menu" size={28} color={theme.textPrimary} style={{ marginRight: 15 }} />
                    <Text style={styles.welcomeText}>
                        Welcome <Text style={styles.welcomeUser}>John,</Text>
                    </Text>
                </View>

                <View style={styles.searchContainer}>
                    <Feather name="search" size={20} color={theme.textSecondary} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={theme.textSecondary}
                        style={styles.searchInput}
                    />
                </View>

                <DashboardCard title="Overview of Quotes" >
                    <Text style={styles.quoteValue}>$ 5,623.00</Text>
                </DashboardCard>

                <DashboardCard title="Pending Approvals">
                    <Text style={styles.approvalValue}>580</Text>
                </DashboardCard>

                <DashboardCard title="RFQ Status Summary">
                    <View style={styles.rfqContainer}>
                        <View style={styles.rfqItem}>
                            <Text style={styles.rfqCombinedText}>
                                Quoted{' '}
                                <Text style={styles.rfqValue}>50</Text>
                            </Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.rfqItem}>
                            <Text style={styles.rfqCombinedText}>
                                Invited{' '}
                                <Text style={styles.rfqValue}>25</Text>
                            </Text>
                        </View>
                    </View>
                </DashboardCard>

            </ScrollView>
        </View>
    );
}

// =================================================================

const styles = StyleSheet.create({
    profileIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    safeArea: {
        flex: 1,

    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '60%',
        opacity: 0.5,
    },
    icon: {
        width: '40%',
        height: '40%'
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 110,
        height: 50,
        resizeMode: 'contain',
    },
    welcomeContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 28,
        color: theme.textPrimary,
    },
    welcomeUser: {
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#007BFF",
        backgroundColor: theme.cardBorder,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginTop: 20,
        height: 50,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: theme.textPrimary,
        borderColor: "#007BFF"
    },
    card: {
        backgroundColor: theme.white,
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
        borderWidth: 3,
        borderColor: "#81bbfb",
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
    },
    cardContent: {
        marginTop: 10,
    },
    quoteValue: {
        fontSize: 36,
        fontWeight: '900',
        color: theme.textPrimary,
    },
    approvalValue: {
        fontSize: 48,
        fontWeight: 'bold',
        color: theme.textPrimary,
    },
    rfqContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    rfqValue: {
        fontSize: 36,
        fontWeight: 'bold',
        color: theme.textPrimary,
    },
    rfqCombinedText: {
        fontSize: 16,
        color: theme.textPrimary,
        fontWeight: '800',
    },
    rfqItem: {
        alignItems: 'center',
    },
    divider: {
        width: 1,
        height: '80%',
        backgroundColor: theme.textSecondary,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    viewMore: {
        fontSize: 16,
        color: theme.primary,
        fontWeight: '600',
    },
    arrowButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: theme.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});