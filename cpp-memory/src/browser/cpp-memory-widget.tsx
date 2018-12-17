import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser';

@injectable()
export class MemoryView extends ReactWidget {

    static readonly ID = 'memory.view';
    static readonly LABEL = 'Memory';

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = MemoryView.ID;
        this.title.label = MemoryView.LABEL;
        this.title.caption = MemoryView.LABEL;
        this.title.closable = true;
        this.update();
    }

    protected render(): React.ReactNode {
        return <div id='memory-view-container'>
            {this.renderHeader()}
        </div>;
    }

    protected renderHeader(): React.ReactNode {
        return <div className='memory-view-header'>
            <h1>Memory View</h1>
        </div>
    }

}
