import { useMostRecentQuantitySample, HKQuantityTypeIdentifier, useHealthkitAuthorization, useMostRecentCategorySample } from '@kingstinct/react-native-healthkit';

function hktest() {
  //make sure you do this before you try to access any data or else it will crash
  const [authorizationStatus, requestAuthorization] = useHealthkitAuthorization([HKQuantityTypeIdentifier.bloodGlucose])
  const bodyFat = useMostRecentQuantitySample(HKQuantityTypeIdentifier.bloodGlucose)
}