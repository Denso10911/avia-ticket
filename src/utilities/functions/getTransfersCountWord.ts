export const getTransfersCountWord = (number: number): string => {
  if (number === 1) {
    return "пересадка"
  } else if (number >= 2 && number <= 4) {
    return "пересадки"
  }
  return "пересадок"
}
