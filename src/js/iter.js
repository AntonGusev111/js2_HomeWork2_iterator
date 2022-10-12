const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }

  const char1 = {
    name: 'Лучник1',
    type: 'Bowman1',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }

  const char2 = {
    name: 'Лучник2',
    type: 'Bowman2',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }

  const char3 = {
    name: 'Лучник3',
    type: 'Bowman3',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }

class Team {
    iter(){
        let iter= { 
            [Symbol.iterator]() {
                const charList = [char, char1, char2, char3];
                let current = 1;
                let last = charList.length;

                return{
                    next() {
                        if (current > last){
                            return{
                                value: undefined,
                                done:true
                            }
                        }
                        return {
                            value: charList[current++],
                            done:false
                        };
                    }
                }
              },
        }
        return iter;    
    }

}


let team = new Team();


for (let item of team.iter()){
    console.log(item)
}