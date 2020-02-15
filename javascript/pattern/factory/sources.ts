interface Interviewer {
  askQuestion: Function;
}

class Developer implements Interviewer {
  askQuestion() {
    console.warn('Asking about design patterns!');
  }
}

class CommunityExecutive implements Interviewer {
  askQuestion() {
    console.warn('Asking about community building!');
  }
}

abstract class InterviewerFactory {
  interviewer: Interviewer;

  abstract makeInterviewer(): Interviewer;

  takeInterview() {
    this.interviewer.askQuestion();
  }
}

class DeveloperFactory extends InterviewerFactory {
  makeInterviewer() {
    this.interviewer = new Developer();
  }
}

(function() {
  const factory = new DeveloperFactory();

  factory.takeInterview();
});
