function integerBreak(n: number): number {
    if (n == 2) {
        return 1
    }
    if (n == 3) {
        return 2
    }
    let m = Math.floor(n/3)
    if (n % 3 == 2) {
        return Math.pow(3, m) * 2
    } else if (n % 3 == 1) {
        return Math.pow(3, m - 1) * 4
    } else {
        return Math.pow(3, m)
    }
}

function main() {
    console.log(integerBreak(10))
}
main()
