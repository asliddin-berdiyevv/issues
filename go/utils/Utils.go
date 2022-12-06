package utils

import (
	"fmt"
	"strconv"
)

func Print(text string) {
	fmt.Println(text)
}
func Pn(N int) {
	fmt.Println(strconv.Itoa(N) + "-masala")
}

func Line() {
	fmt.Println("* -------------------------- *")
	fmt.Println()
}
