import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  //Läuft zeichen für Zeichen über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCase = currentElement.toUpperCase()

    //Alle Zeichen werden doppelt aufgeschrieben
    result.push(upperCase)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  // count all words
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      count = count + 1
    }
  }
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasUpperCaseLetter = false
  //Läuft zeichen für Zeichen über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const UpperCaseLetter = currentElement.toUpperCase()

    const LowerCaseLetter = UpperCaseLetter.toLowerCase()
    if (LowerCaseLetter === UpperCaseLetter) {
      //do nothing
    } else if (currentElement === UpperCaseLetter) {
      hasUpperCaseLetter = true
    }
  }

  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result.push(3)
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe06(args) {
  const input = args
  const result = []

  let SpecialLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const UpperCaseLetter = currentElement.toUpperCase()

    const LowerCaseLetter = UpperCaseLetter.toLowerCase()
    if (currentElement === " ") result.push(currentElement)
    else if (LowerCaseLetter === UpperCaseLetter) {
      SpecialLetter = true
    }
  }
  return SpecialLetter
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe09(args) {
  const input = args
  // Wenn input genau 6 zeichen lang ist, gebe wahr zurück
  if (input.length === 6) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe07(args) {
  //teste ob das wort und vorkommt
  const input = args
  if (input.includes("und")) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe12(args) {
  const input = args
  const result = []

  let pos = -1
  let foundE = false

  for (let i = 0; i < input.length; i++) {
    const currentELement = input[i]
    if (currentELement === "e") {
      if (foundE === false) {
        pos = i
      }
      foundE = true
    } // nicht  mehr als ein e wird bestimmt
  }
  return pos
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []

  let pos = -1
  let foundE = false

  for (let i = 0; i < input.length; i++) {
    const currentELement = input[i]
    if (currentELement === "e") {
      pos = i //wenn e gefunden wird i überschrieben

      foundE = true
    }
  }
  return pos
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe20(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      if (input[i + 1] === " ") {
        return true
      } else {
        return false
      }
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabePeter(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn das Element 1 ist, ersetze es mit Peter
    if (currentElement === "1") {
      result.push("P")
      result.push("e")
      result.push("t")
      result.push("e")
      result.push("r")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabePeter]", aufgabePeter)

//Aufgabe Maria

//Maria hat Angst vor Grossbuchstaben, deswegen will sie jeden Grossbuchstaben mit `!kleinbuchstaben`ersetzen. Ausserdem möchte sie ein `Triggerwarning` am Anfang des Satzes haben.

export function aufgabeMaria(args) {
  const input = args
  const result = []

  let hasDangerousLetters = false

  for (let i = 0; i < input.length; i++) {
    //wenn das currentElement Grossbuchstabe ist ersetze mit "!kleinbuchstabe"
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    //65-90
    if (ascii >= 65 && ascii <= 90) {
      // ist ein Grossbuchstabe
      result.push("!")
      result.push(currentElement.toLowerCase())

      hasDangerousLetters = true
    } else {
      result.push(currentElement)
    }
  }

  if (hasDangerousLetters === true) {
    result.unshift("TW: ")
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabeMaria]", aufgabeMaria)

export function countingSort(args) {
  const input = args
  const lookup = new Array(128).fill(0) //hier machen wir eine neue Liste in der dann gezählt wird wie oft ein Element vorkommt 128 weil im ascii code 128 Elemente vorkommen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //bestimme den ascii Code des Elements
    lookup[ascii] = lookup[ascii] + 1 //rechne +1 für das Element
  }

  const result = []

  for (let i = 0; i < lookup.length; i++) {
    const value = lookup[i]
    for (let j = 0; j < value; j++) {
      const character = String.fromCharCode(i)
      result.push(character)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=countingSort]", countingSort)

export function aufgabe10(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe14(args) {
  const input = args
  const result = []

  //drittes e / E erkennen und markieren
  // in einzelne Buchstaben aufteilen
  function mark_third_e(args) {
    let eCount = 0
    const newText = letters
      .map((letter) => {
        if (letter === "e" || letter === "E") {
          eCount = eCount + 1
        }
        if (eCount === 3) {
          return <span style="color : red; ">e</span>
        }
        return letter
      })
      .join("")

    return newText
  }
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe21(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function insertSort(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    const result = []

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)
      //vergleiche ob das zweite Element einen kleineren oder grösseren ascii code hat als das vorherige Element und sortiere entsprechend
      if (i > 0 && ascii < input[i - 1].charCodeAt(0)) {
        result.push(input[i - 1])
        result.push(currentElement)
      } else {
        result.push(currentElement)
      }
    }
    return result.join("")
  }
}
linkupExerciseHandler("[data-click=insertSort]", insertSort)
