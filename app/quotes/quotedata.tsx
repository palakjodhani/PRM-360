import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// =================================================================

const theme = {
  primary: '#0078FD',
  background: '#F7F9FC',
  cardBackground: '#FFFFFF',
  textPrimary: '#1E1E1E',
  textSecondary: '#6C757D',
  commentsBg: '#e5f1ff',
  divider: '#EEEEEE',
  submitButton: '#0078FD',
};

// =================================================================

const quoteDetails = {
  rfqId: 'RFQ-2024-001',
  date: '13/11/2024',
  title: 'Supply of Laboratory Kits',
  company: {
    name: 'XXXX Technologies',
    name2: 'XXXXXX,',
    name3: 'XXXXXXXXX',
    address: 'No 6, 10th Main road, garevebhavipalya,',
    city: 'Bangalore, KA - 560068.',
    email: 'xxxxxxxx@gmail.com',
    phone: '+91 91xxxxxx86',
  },
  products: [
    { id: 'p1', name: 'xxxxx Product (1)', price: '1,500.00' },
    { id: 'p2', name: 'xxxxx Product (1)', price: '1,500.00' },
  ],
  comments: [
    {
      id: 'c1',
      text: 'Please attach all paper work. Our quality department needs back-to-birth trace.\nLooking forward to reviewing your quotation.',
      timestamp: '13/11/2024, 11:30AM',
    },
    {
      id: 'c2',
      text: 'Please attach all paper work.\nLooking forward to reviewing your quotation.',
      timestamp: '13/11/2024, 11:30AM',
    },
  ],
};

// =================================================================

export default function QuoteDetailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Feather name="chevron-left" size={28} color={theme.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {quoteDetails.rfqId} - {quoteDetails.title}
          </Text>
        </View>


        <View style={styles.detailsCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderContent}>

              <Image
                source={require('../../assets/images/icon/icon1.png')}
                style={{ width: 25, height: 30, resizeMode: 'contain' }}
              />
              <View style={styles.cardHeaderText}>
                <Text style={styles.cardHeaderRfq}>{quoteDetails.rfqId}</Text>
                <Text style={styles.cardHeaderDate}>{quoteDetails.date}</Text>
              </View>
            </View>
            <MaterialCommunityIcons size={28} color="rgba(255,255,255,0.7)" />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.companyName}>{quoteDetails.company.name}</Text>
            <Text style={styles.companyName2}>{quoteDetails.company.name2}</Text>
            <Text style={styles.companyName2}>{quoteDetails.company.name3}</Text>
            <Text style={styles.addressText}>{quoteDetails.company.address}</Text>
            <Text style={styles.addressText}>{quoteDetails.company.city}</Text>
            <Text style={styles.contactInfo}>
              Email: <Text style={{ color: theme.textPrimary }}>{quoteDetails.company.email}</Text>
            </Text>
            <Text style={styles.contactInfo}>
              Number: <Text style={{ color: theme.textPrimary }}>{quoteDetails.company.phone}</Text>
            </Text>

            <View style={styles.divider} />
            <Text style={styles.requestTitle}>Request ({quoteDetails.products.length} line items)</Text>
            {quoteDetails.products.map((product) => (
              <View key={product.id} style={styles.productRow}>
                <View>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>₹{product.price}</Text>
                </View>
                <Text style={styles.productPrice}>₹{product.price}</Text>
              </View>
            ))}
          </View>
        </View>


        <View style={styles.commentsSection}>
          <View style={styles.commentsHeader}>
            <Text style={styles.sectionTitle}>Comments</Text>
            <TouchableOpacity style={styles.pdfButton} onPress={() => router.replace("/quotes/pdfscreen")}>
              <Image
                source={require('../../assets/images/icon/icon2.png')}
                style={{ width: 20, height: 25, resizeMode: 'contain' }}
              />
              <Text style={styles.pdfButtonText}>PDF View</Text>
            </TouchableOpacity>
          </View>
          {quoteDetails.comments.map((comment) => (
            <View key={comment.id} style={styles.commentItem}>
              <View style={styles.commentDot} />
              <View style={styles.commentContent}>
                <Text style={styles.commentText}>{comment.text}</Text>
                <Text style={styles.commentTimestamp}>{comment.timestamp}</Text>
              </View>
            </View>
          ))}
          <TextInput
            style={styles.commentInput}
            placeholder="Add Comments"
            placeholderTextColor={theme.textSecondary}
          />
        </View>
      </ScrollView>


      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => alert('Quote submitted successfully!')}
        >
          <Text style={styles.submitButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// =================================================================

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120,
    marginTop: height * 0.05,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: theme.textPrimary,
    marginLeft: 10,
  },
  detailsCard: {
    backgroundColor: theme.cardBackground,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.primary,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderText: {
    marginLeft: 10,
  },
  cardHeaderRfq: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cardHeaderDate: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  cardBody: {
    padding: 20,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.textPrimary,
    marginBottom: 8,
  },
  companyName2: {
    fontSize: 16,
    color: theme.textPrimary,
    marginBottom: 8,
  },
  addressText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.textPrimary,
    lineHeight: 20,
  },
  contactInfo: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.textSecondary,
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: theme.divider,
    marginVertical: 20,
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.textPrimary,
    marginBottom: 15,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productName: {
    fontSize: 14,
    color: theme.textPrimary,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '900',
    color: theme.textPrimary,
    marginTop: 2,
  },
  commentsSection: {

    backgroundColor: theme.commentsBg,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0eaff',
  },
  commentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.textPrimary,
  },
  pdfButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdfButtonText: {
    fontWeight: '600',
    color: theme.primary,
    marginLeft: 5,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  commentDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#848484',
    marginTop: 6,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentText: {
    fontSize: 14,
    color: theme.textPrimary,
    lineHeight: 21,
  },
  commentTimestamp: {
    fontSize: 12,
    color: '#aaa',
    fontWeight: '700',
    marginTop: 5,
    textAlign: 'right',
  },
  commentInput: {
    backgroundColor: theme.cardBackground,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#0078FD',
  },


  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: theme.cardBackground,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,

    borderTopWidth: 1,
    borderTopColor: theme.divider,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButton: {

    backgroundColor: theme.submitButton,
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 50,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});