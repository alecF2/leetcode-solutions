function maxProfit(prices: number[]): number {
  let min = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min)
    profit = Math.max(prices[i] - min, profit)
  }

  return profit
}

// intuition
function maxProfitInt(prices: number[]): number {
  let min = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (profit < prices[i] - min) {
      profit = prices[i] - min
    }
  }

  return profit
}

function main() {
  const prices = [7, 5, 11, 1, 3, 4]
  console.log(maxProfit(prices))
}

main()
