// CI không chấp nhận thiếu test, test bị bỏ qua hoặc còn TODO.
import { spawnSync } from 'node:child_process';
const run = spawnSync(process.execPath, ['--test', '--test-reporter=tap'], { encoding: 'utf8' });
process.stdout.write(run.stdout ?? '');
process.stderr.write(run.stderr ?? '');
const count = key => Number((run.stdout ?? '').match(new RegExp(`^# ${key} (\\d+)\\s*$`, 'm'))?.[1] ?? NaN);
if (run.status !== 0 || !(count('tests') > 0) || count('fail') !== 0 || count('todo') !== 0 || count('skipped') !== 0 || count('pass') !== count('tests')) {
  console.error('CI không đạt: cần có test và toàn bộ test phải pass, không còn TODO hoặc skipped.');
  process.exit(1);
}
