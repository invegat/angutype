import { Component, OnInit } from '@angular/core';
import { TreeModule, TreeNode, ITreeOptions } from 'angular2-tree-component';
import { AppState } from '../app.service';
import { Title } from './../home/title';
import { XLargeDirective } from './x-large';
import { Routes, Router } from '@angular/router';

@Component({
    selector: 'chapterProjects',
    templateUrl: './chapterProjects.component.pug',
    styleUrls: ['./chapterProjects.component.styl']

})

export class ChapterProjectsComponent implements OnInit {
    public coptions = {
        nodeClass: (node: TreeNode) => {
            return 'id-' + node.data.id;
        }
    };
    public nodes: TreeModule =
    [
        {
            id: 7,
            name: 'Chapter 7',
            children: [
                { id: 701, name: '01_template-driven' },
                { id: 702, name: '02_growable-items-form' },
                { id: 703, name: '03_reactive' },
                { id: 704, name: '04_form-builder' }
            ]
        }
    ];
    constructor(
        private router: Router,
        public appState: AppState,
        public title: Title
    ) { }
    public go($node: TreeNode): void {

        console.log('$node:', $node);
        let m = $node.getClass();
        console.log('m:', m);
        if (m.length < 6) {
            return;
        }
        let fr = this.router.config.find((r) => r.path === m);
        if (fr != null) {
            console.log('fr:' + fr.path);
            let name: string = $node.displayField;
            console.log('node name: ' + name);
            this.router.navigate([fr.path, { name }]);
        } else { this.appState.set('value', event + '  not found'); }
    }
    public ngOnInit() {
        console.log('in `Projects` component');
    }

    public isDisabled($node: TreeNode): boolean {
        let m = $node.getClass();
        return (m.length < 6);
    }
    public getColor($node: TreeNode): string {
        return ($node.getClass().length > 5) ? 'green' : 'blue';
    }
}
