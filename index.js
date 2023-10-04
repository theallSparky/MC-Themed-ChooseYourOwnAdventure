function playGame() {
    const name = prompt('What is your name?')
    const firstChoice = prompt(`Hello ${name}, and welcome to a Minecraft-themed 'Choose-Your-Own-Adventure'! For the questions, please enter the answers exactly as displayed within the (X/Y/Z) 
    
    
    You spawn into a fresh, new world and immediately spot a Tree, an Open cave, and a wild Creeper. Which do you approach? (T/O/C)`)
    
    switch (firstChoice) {
        case 'T':       //Here is where to begin when the player chooses to approach the Tree
             alert("You have chosen the Tree. It's a tall one! The shade feels nice as you draw close...")
             let cutOrWalk = prompt('Do you Chop down the tree or Walk past it? (C/W)')
             if (cutOrWalk == 'C' || cutOrWalk == 'c') {
                alert('You have chosen to chop wood. Time for basic resource collection! You collect enough to make a crafting table and for one tool.')
                let swordOrPickaxe = prompt(`Do you make a Sword or Pickaxe? (S/P)`)
                    if (swordOrPickaxe == 'S' || swordOrPickaxe == 's') {
                        alert('After crafting your sword, you are ambushed but your new wooden sword helps scare off the attackers! Thankfully, your bark of your sword helped scare them away. The instigators flee while cursing.')
                        let playAgain = confirm('You have reached the end! Would you like to play again?')
                        if (playAgain == true) {
                            playGame()
                        }
                    } else if (swordOrPickaxe == 'P' || swordOrPickaxe == 'p') {
                        alert(`After crafting the wooden pickaxe, you are ambushed and your new tool does little to scare the foes away. You are mugged, but only sustain minor injuries. You go home and sleep it off.`)
                        let playAgain = confirm('You have reached the end! Would you like to play again?')
                        if (playAgain == true) {
                            playGame()
                        }                    }
            } else if (cutOrWalk == 'W' || cutOrWalk == 'w') {
                alert('You choose to walk past the tree. You reach the top of a hill where you spot a group of nearby pillagers')
                let attackOrHide = prompt('Do you attack or hide? (A/H)')
                if (attackOrHide =='A' || attackOrHide =='a') {
                    alert('What are you thinking? You literally just spawned and are attempting to brawl with pillagers bare-handed and practically wearing pajamas. You are unarmed, so you get beat up. You barely manage to escape becoming very bruised as you run away crying.')
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                } else if ( attackOrHide == 'H' || attackOrHide == 'h') {
                    alert(`Pillagers aren't smart, so, unsurprisingly, they walk in the other direction. You are safe to resume roaming the world freely...`)
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                }
            }
            break
        case 'O':       //Here is where to begin when the player chooses to approach the Open cave
            let enterOrPassCave = prompt('You walk up to the entrance. Do you Enter or Pass the open cave? (E/P)')
            if (enterOrPassCave == 'E' || enterOrPassCave == 'e') {
                let fightOrRun = prompt(`You enter and find a group of 4 zombies about 15 blocks deep, right about where the light fromm the surface becomes too weak. 
                
                Do you Fight or Run? (F/R)`)
                if (fightOrRun == 'F' || fightOrRun == 'f') {
                    alert('The zombies overpower and your body expires. Better luck next time.')
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                } else if (fightOrRun == 'R' || fightOrRun == 'r') {
                    alert('You turn around, spotting coal, iron, and copper blocks for when you return with better tools!')
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                }
            } else if (enterOrPassCave == 'P' || enterOrPassCave == 'p') {
                alert('You walk over the hill and find a desert temple! The unnatural shape evokes a curiosity within you far too great to resist. You hike over and find an entrance.')
                let searchOrPass = prompt('Do you search the desert temple? (S/P)')
                if (searchOrPass == 'S' || searchOrPass == 's') {
                    alert(`Oh, ${name}, haven't you ever heard of the cat? You curiosity gets the best of you and while exploring, the TNT in the temple explodes and the game is over!`)
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                } else if ( searchOrPass == 'P' || searchOrPass == 'p') {
                    alert(`After passing the desert temple you find a horse with a saddle and ride away! The story of ${name} continues...`)
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                }
            }
            break
        case 'C':       //Here is where to begin when the player chooses to approach the Creeper
            let runOrLureOrAttack = prompt('You approach the creeper and it notices you and begins its mindless charge. Do you Run, Lure, or Attack? (R/L/A)')
            if (runOrLureOrAttack == 'R' || runOrLureOrAttack == 'r') {
                alert(`Creepers are slow, but you, ${name}, run very quickly, so next thing you know, you find yourself in a village.`)
                let passOrTrade = prompt(`Do you Pass through or Trade? (P/T)`)
                if (passOrTrade == 'P' || passOrTrade == 'p') {
                    alert(`It's so dark that as you begin leaving the village, you fall into a revine and oof. Unfortunately, that's the end of the tale of ${name}`)
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                } else if (passOrTrade == 'T' || passOrTrade == 't') {
                    alert(`While trading, you find a chest with a pair of diaond boots and 3 bread, which you happily take.`)
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                }
            } else if (runOrLureOrAttack == 'L' || runOrLureOrAttack == 'l') {
                let zombieOrEnderman = prompt(`You decide to play it boldly. You find yourself in a precarious position, ${name}.
                
                Do you lure the creeper to a Zombie or an Enderman? (Z/E)`)
                if (zombieOrEnderman == 'Z' || zombieOrEnderman == 'z') {
                    alert(`The zombie explodes and you aquire rotten flesh, and a gunpowder. You riskiness paid off! Congratulations, ${name}, at least you live to see another day...`)
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                } else if (zombieOrEnderman == 'E' || zombieOrEnderman == 'e') {
                    alert(`Although very dangerous, which leads to a few hearts being taken by the enderman swipe, the enderman explodes and you aquire gunpowder and an ender pearl. 
                    Very well done, ${name}`)
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                }
            } else if (runOrLureOrAttack == 'A' || unOrLureOrAttack == 'a') {
                alert('After a long and very tedious battle, you are victorious against the creeper.  The creeper doesnt even explode, it just took like 30 swings. You gain enough Xp to level up to level 3.')
                alert(`Oh no, ${name}, your arm is tired and your hunger is half empty! `)
                let foodOrXp = prompt(`Do you look for Food or more Xp? (F/X)`)
                if (foodOrXp == 'F' || foodOrXp == 'f') {
                    alert('You find apples and heal. You live to see another day!')
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                } else if (foodOrXp == 'X' || foodOrXp == 'x') {
                    alert(`You should've heaeled, you pick a fight with bees and you oof.`)
                    let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
                }
            }
            break
        default:
            alert(`Please enter a valid input!`)
            let playAgain = confirm('You have reached the end! Would you like to play again?')
                    if (playAgain == true) {
                        playGame()
                    }
    }
}
playGame()

// let playAgain = confirm('You have reached the end! Would you like to play again?')
    if (playAgain == true) {
        playGame()
    }
    
     
