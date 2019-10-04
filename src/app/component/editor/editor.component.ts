import { Component, OnInit, ViewChild } from '@angular/core';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import { CodeMirrorOptions } from 'src/app/shared/interface/ide/code-mirror.interface';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @ViewChild('CustomCodeMirror') codeMirrorRef: any;
  public content: any = 'in;\n\nprogress;';
  public options: CodeMirrorOptions = {
    lineNumbers: true,
    theme: 'material',
    readOnly: true,
    spellcheck: true,
    mode: 'text/typescript',
    gutters: ['CodeMirror-lint-markers'],
    indentWithTabs: true,
    smartIndent: true,
  };
  constructor() {}

  ngOnInit() {}

  public log(code): void {
    this.codeMirrorRef;
    let a = this.codeMirrorRef;
    console.log(this.codeMirrorRef.codeMirror.getValue());
  }

  public hi(hi) {
    console.log(hi);
  }
}
