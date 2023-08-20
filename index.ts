class User {
    skills: string[];
    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    // addSkill(skill: string): void {}; я добавил в конец скобки и у меня была ошибка
    // addSkill(skills: string[]): void {};
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }

    }
        
    
}

new User().addSkill(['js', 'ts']);



class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
      } else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
      } else {
        throw new Error('Invalid arguments');
      }
    }
  }