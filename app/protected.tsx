import { isLoggedIn } from '@/lib/auth';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function ProtectedPage() {
  const [auth, setAuth] = useState<boolean | null>(null);

  useEffect(() => {
      isLoggedIn().then(setAuth);
  }, []);

  if (auth === null) return null;
  if (!auth) return <Redirect href="/(auth)/login" />;

  return <Text>This is a protected page</Text>;
}
