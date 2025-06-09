
import CustomTabBar from '@/components/CustomTabBar';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={props => {
        const currentRouteName = props.state.routes[props.state.index].name;
        if (currentRouteName === 'index') {
          return null;
        }

        return <CustomTabBar {...props} />;
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="rfq" />
      <Tabs.Screen name="quote" />
      <Tabs.Screen name="history" />
      <Tabs.Screen name="pending" />
    </Tabs>
  );
}