import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');
const TAB_BAR_HEIGHT = 110;
const SVG_CURVE_RADIUS = 40;

// =================================================================

const theme = {
  primary: '#0078FD',
  white: '#FFFFFF',
  inactiveText: '#a0d1ff',
  activeIconBackground: '#FFFFFF',
};

// =================================================================

const tabConfig = {
  rfq: {
    activeIcon: require('../assets/images/icon/rfqblue.png'),
    inactiveIcon: require('../assets/images/icon/rfqwhite.png'),
    label: 'RFQ',
  },
  quote: {
    activeIcon: require('../assets/images/icon/quoteblue.png'),
    inactiveIcon: require('../assets/images/icon/quotewhite.png'),
    label: 'Quote',
  },
  dashboard: {
    activeIcon: require('../assets/images/icon/dashboardblue.png'),
    inactiveIcon: require('../assets/images/icon/dashboardwhite.png'),
    label: 'Dashboard',
  },
  history: {
    activeIcon: require('../assets/images/icon/historyblue.png'),
    inactiveIcon: require('../assets/images/icon/historywhite.png'),
    label: 'History',
  },
  pending: {
    activeIcon: require('../assets/images/icon/profileblue.png'),
    inactiveIcon: require('../assets/images/icon/profilewhite.png'),
    label: 'Pending',
  },
};

// =================================================================

const createPath = (tabCount: number, focusedVisibleIndex: number): string => {
  if (focusedVisibleIndex < 0) {
    return `M 0 30 L ${width} 30 L ${width} ${TAB_BAR_HEIGHT} L 0 ${TAB_BAR_HEIGHT} Z`;
  }
  const tabWidth = width / tabCount;
  const centerOfTab = focusedVisibleIndex * tabWidth + tabWidth / 2;
  const startY = 30;
  const p = `M 0 ${startY} L ${centerOfTab - SVG_CURVE_RADIUS - 5} ${startY} C ${centerOfTab - SVG_CURVE_RADIUS} ${startY}, ${centerOfTab - SVG_CURVE_RADIUS + 10} 0, ${centerOfTab} 0 C ${centerOfTab + SVG_CURVE_RADIUS - 10} 0, ${centerOfTab + SVG_CURVE_RADIUS} ${startY}, ${centerOfTab + SVG_CURVE_RADIUS + 5} ${startY} L ${width} ${startY} L ${width} ${TAB_BAR_HEIGHT} L 0 ${TAB_BAR_HEIGHT} Z`;
  return p;
};


// =================================================================

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { routes, index: focusedIndex } = state;

  const orderedVisibleRoutes = ['rfq', 'quote', 'dashboard', 'history', 'pending']
    .map(name => routes.find(route => route.name === name))
    .filter((route): route is typeof routes[0] => !!route);

  const focusedRouteName = routes[focusedIndex]?.name;
  const focusedVisibleIndex = orderedVisibleRoutes.findIndex(route => route.name === focusedRouteName);

  return (
    <View style={styles.container}>
      <Svg width={width} height={TAB_BAR_HEIGHT} style={styles.svg}>
        <Path d={createPath(orderedVisibleRoutes.length, focusedVisibleIndex)} fill={theme.primary} />
      </Svg>

      <View style={styles.tabBar}>
        {orderedVisibleRoutes.map((route) => {
          const isFocused = route.name === focusedRouteName;

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (isFocused) {
            return <View key={route.key} style={styles.tabItem} />;
          }

          const config = tabConfig[route.name as keyof typeof tabConfig];
          return (
            <TouchableOpacity key={route.key} onPress={onPress} style={styles.tabItem}>
              <Image source={config.inactiveIcon} style={styles.icon} />
              <Text style={styles.inactiveLabel}>{config.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {(() => {
        if (focusedVisibleIndex < 0) return null;

        const tabWidth = width / orderedVisibleRoutes.length;
        const config = tabConfig[focusedRouteName as keyof typeof tabConfig];

        return (
          <TouchableOpacity
            key={`focused-${focusedRouteName}`}
            style={[styles.focusedButtonWrapper, { left: focusedVisibleIndex * tabWidth }]}
            onPress={() => navigation.navigate(focusedRouteName)}
          >
            <View style={styles.focusedButton}>
              <Image source={config.activeIcon} style={styles.icon} />
            </View>
            <Text style={styles.activeLabel}>{config.label}</Text>
          </TouchableOpacity>
        );
      })()}
    </View>
  );
}

// =================================================================

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width,
    height: TAB_BAR_HEIGHT,
  },
  svg: {
    position: 'absolute',
    bottom: 0,
  },
  tabBar: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 35,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  inactiveLabel: {
    color: theme.inactiveText,
    fontSize: 11,
    marginTop: 4,
    fontWeight: '600',
  },
  focusedButtonWrapper: {
    position: 'absolute',
    top: 15,
    width: width / 5,
    alignItems: 'center',
  },
  focusedButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.activeIconBackground,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  activeLabel: {
    color: theme.white,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
  },
});