import { Component, OnInit } from '@angular/core';
import { TreeModule, TreeNode, ITreeOptions } from 'angular2-tree-component';
import { AppState } from '../../app.service';
import { Title } from './../../home/title';
import { Routes, Router } from '@angular/router';

@Component({
    selector: 'chapterProjects',
    templateUrl: './chapterProjects.component.pug',
    styleUrls: ['./chapterProjects.component.styl']

})

export class ChapterProjectsComponent {
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
                { id: 704, name: '04_form-builder' },
                { id: 705, name: '05_custom-validator' },
                { id: 706, name: '06_custom-validator-directive' },
                { id: 707, name: '07_custom-validator-error-message' },
                { id: 708, name: '08_async-validator' },
                { id: 709, name: '09_reactive-with-validation' },
                { id: 710, name: '10_template-driven-with-validation' },
                { id: 711, name: '11_default-value-accessor'},
                { id: 712, name: '12_growable-items-form-with-remove' },

            ]
        },
        {
          id: 8,
          name: 'Chapter 8',
          children: [
                { id: 801, name: 'client.main' },
                { id: 802, name: 'client.async.main' },
                { id: 803, name: 'main-form'},
                { id: 804, name: 'main-form-with-service'}
          ]
        }
    ];
    constructor(
        private router: Router,
        public appState: AppState,
        public title: Title,
    ) { }
    public go($node: TreeNode): void {

        // console.log('$node:', $node);
        let m = $node.getClass();
        // console.log('m:', m);
        if (m.length < 6) {
            return;
        }
        let name: string = $node.displayField;
        //  console.log('node name: ' + name);
        let success = this.router.navigateByUrl('/angtyp/' + m + '?name=' + name);
        success.then((res) => {
            if (!res) { console.log('navigation to:', m, ' failed'); }
        });
        success.catch((err) => console.log('navigate rejected:', err, '  route:', m));
    }

    public isDisabled($node: TreeNode): boolean {
        let m = $node.getClass();
        return (m.length < 6);
    }
    public getColor($node: TreeNode): string {
        return ($node.getClass().length > 5) ? 'green' : 'blue';
    }
}
