import { HKQuantityTypeIdentifier, useHealthkitAuthorization } from '@kingstinct/react-native-healthkit';
import useMostRecentQuantitySample from '@kingstinct/react-native-healthkit/lib/typescript/src/hooks/useMostRecentQuantitySample';

function hktest(){
  //make sure you do this before you try to access any data or else it will crash
  const [authorizationStatus, requestAuthorization] = useHealthkitAuthorization([HKQuantityTypeIdentifier.bloodGlucose])

  const bodyFat = useMostRecentQuantitySample(HKQuantityTypeIdentifier.bodyFatPercentage)
  const height = useMostRecentQuantitySample(HKQuantityTypeIdentifier.height)
  //this is how we sample heartrate on ios
  const HeartRate = useMostRecentQuantitySample(HKQuantityTypeIdentifier.heartRate)
}