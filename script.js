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
