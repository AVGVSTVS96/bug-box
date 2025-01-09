import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function CaptureScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.text + '20' }]}>
        <Text style={[styles.title, { color: colors.text }]}>Capture Note</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity 
          style={[styles.recordButton, { backgroundColor: colors.tint }]}
          activeOpacity={0.7}
        >
          <IconSymbol size={40} name="mic.fill" color={colors.background} />
        </TouchableOpacity>
        <Text style={[styles.hint, { color: colors.icon }]}>Tap to start recording</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingTop: 60,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  hint: {
    fontSize: 16,
  },
}); 