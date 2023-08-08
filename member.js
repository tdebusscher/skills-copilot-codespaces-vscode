function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '=',
      skills: '=',
      edit: '&',
      remove: '&'
    }
  };
}