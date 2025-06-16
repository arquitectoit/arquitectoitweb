

const mdblocks = await n2m.pageToMarkdown(id);
const md = n2m.toMarkdownString(mdblocks);

// Handle synchronized block content
const syncBlockContent = mdblocks.map(block => {
    if (block.type === 'synced_block') {
        return block.children ? n2m.toMarkdownString(block.children) : '';
    }
    return block.parent; // Copy the text as is if not synchronized
}).join('\n');



// ensure directory exists
const root = path.join('_posts', nav)
fs.mkdirSync(root, { recursive: true })

//writing to file
const ftitle = `${date}-${slug}.md`
fs.writeFile(path.join(root, ftitle), fm + md.parent, (err) => {
    if (err) {
        console.log(err);
    }
});