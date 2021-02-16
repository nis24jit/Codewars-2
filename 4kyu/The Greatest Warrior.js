class Warrior {
  constructor() {
    this.lvl = 1;
    this.rnk = 'Pushover';
    this.expr = 100;
    this.achv = [];
    this.ranks = [
      'Pushover',
      'Novice',
      'Fighter',
      'Warrior',
      'Veteran',
      'Sage',
      'Elite',
      'Conqueror',
      'Champion',
      'Master',
      'Greatest',
    ];
  }
  level() {
    return this.lvl;
  }
  rank() {
    const idx = Math.floor(this.lvl / 10);
    return this.ranks[idx];
  }
  achievements() {
    return this.achv;
  }
  experience() {
    return this.expr;
  }
  _checkMaxLvl() {
    if (this.lvl == 100) return false;
  }
  _checkMaxExp() {
    if (this.expr == 10000) return false;
  }
  _updateLvl() {
    this.lvl = Math.floor(this.expr / 100);
  }
  training(event) {
    const description = event[0];
    const experience = event[1];
    const minimumLvl = event[2];
    if (this.lvl < minimumLvl) return 'Not strong enough';
    this.expr += experience;
    if (this.expr > 10000) this.expr = 10000;
    this.achv.push(description);
    this._updateLvl();
    return description;
  }
  battle(enemy_level) {
    if (enemy_level < 1 || enemy_level > 100) return 'Invalid level';
    if (this.lvl === enemy_level) {
      this.expr += 10;
      if (this.expr > 10000) this.expr = 10000;
      this._updateLvl();
      return 'A good fight';
    } else if (this.lvl - 1 === enemy_level) {
      if (this.expr > 10000) this.expr = 10000;
      this.expr += 5;
      this._updateLvl();
      return 'A good fight';
    } else if (this.lvl - 1 > enemy_level) {
      return 'Easy fight';
    } else if (this.lvl < enemy_level) {
      if (
        enemy_level - this.lvl >= 5 &&
        Math.floor(enemy_level / 10) > Math.floor(this.lvl / 10)
      ) {
        return "You've been defeated";
      } else {
        const dif = enemy_level - this.lvl;
        const value = 20 * dif * dif;
        this.expr += value;
        if (this.expr > 10000) this.expr = 10000;
        this._updateLvl();
        return 'An intense fight';
      }
    }
  }
}
