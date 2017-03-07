import { TestBed, inject } from '@angular/core/testing';

import { ChapterProjectsComponent } from './chapterProjects.component';

describe('a chapterProjects component', () => {
	let component: ChapterProjectsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ChapterProjectsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ChapterProjectsComponent], (ChapterProjectsComponent) => {
		component = ChapterProjectsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});