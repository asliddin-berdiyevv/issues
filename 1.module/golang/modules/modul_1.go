package modules

import (
	u "issue/utils"
	"strconv"
)

func M1(n int) {
	u.Pn(1)
	u.Print("P: " + strconv.Itoa(4*n))
	u.Line()
}

func M2(n int) {
	u.Pn(1)
	u.Print("P: " + strconv.Itoa(n*n))
	u.Line()
}

func M3(n int) {
	u.Pn(1)
	u.Print("P: " + strconv.Itoa(n*n))
	u.Line()
}
